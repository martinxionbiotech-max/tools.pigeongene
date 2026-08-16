// 遗传计算逻辑 —— 基于孟德尔遗传定律，计算可复现、有边界条件
// 本文件是各工具页面的唯一计算来源，避免在页面 <script> 中重复实现。

// 单基因位点的孟德尔遗传：两个亲本各提供一个等位基因
// 基因型用两个字母表示（如 AA、Aa、aa），保留输入大小写：
// 大写字母与小写字母视为不同等位基因（如 A 显性、a 隐性）。
export interface PunnettOptions {
  // 指定哪个等位基因为显性，默认 A。
  dominantAllele?: string;
}

export interface PunnettResult {
  parentA: string;
  parentB: string;
  dominantAllele: string;
  // 子代基因型组合及概率
  offspring: { genotype: string; probability: number; percentage: string }[];
  // 表型概率（按 dominantAllele 判断显性）
  phenotypes: {
    phenotype: string;
    genotypes: string[];
    probability: number;
    percentage: string;
  }[];
}

// 将两个等位基因规范化为稳定顺序（大写在前、小写在后），
// 使 Aa 与 aA 显示为同一个基因型，同时不丢失杂合信息。
function canonicalAlleles(a: string, b: string): string {
  return [a, b].sort().join('');
}

// 使用 Unicode 码点排序，使大写等位基因排在对应小写等位基因之前，
// 例如 AA → Aa → aa，避免 localeCompare 在部分环境下忽略大小写。
function compareAlleleKeys(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

// 解析并校验单基因型。大小写均接受，且不会把 Aa 归一化成 AA。
export function parseGenotype(genotype: string): [string, string] {
  const cleaned = genotype.trim();
  if (cleaned.length !== 2) {
    throw new Error('基因型必须由两个等位基因组成（如 AA、Aa、aa）。');
  }
  if (!/^[A-Za-z]{2}$/.test(cleaned)) {
    throw new Error('基因型只能由两个英文字母组成，例如 AA、Aa、Bb。');
  }
  return [cleaned[0], cleaned[1]];
}

export function normalizeGenotype(genotype: string): string {
  const [a, b] = parseGenotype(genotype);
  return canonicalAlleles(a, b);
}

export function parseDominantAllele(value: string | undefined, fallback = 'A'): string {
  const cleaned = (value ?? fallback).trim();
  if (!/^[A-Za-z]$/.test(cleaned)) {
    throw new Error('显性等位基因必须是单个英文字母（如 A、B、R）。');
  }
  return cleaned;
}

// 计算单基因位点的 Punnett 方格。
export function punnettSquare(parentA: string, parentB: string, options: PunnettOptions = {}): PunnettResult {
  const [a1, a2] = parseGenotype(parentA);
  const [b1, b2] = parseGenotype(parentB);
  const dominantAllele = parseDominantAllele(options.dominantAllele);

  const combos: string[] = [];
  for (const allele1 of [a1, a2]) {
    for (const allele2 of [b1, b2]) {
      combos.push(canonicalAlleles(allele1, allele2));
    }
  }

  const counts = new Map<string, number>();
  for (const combo of combos) {
    counts.set(combo, (counts.get(combo) || 0) + 1);
  }

  const offspring = [...counts.entries()]
    .sort((x, y) => compareAlleleKeys(x[0], y[0]))
    .map(([genotype, count]) => ({
      genotype,
      probability: count / 4,
      percentage: `${((count / 4) * 100).toFixed(0)}%`,
    }));

  const dominantGenotypes = offspring
    .filter((item) => item.genotype.includes(dominantAllele))
    .map((item) => item.genotype);
  const recessiveGenotypes = offspring
    .filter((item) => !item.genotype.includes(dominantAllele))
    .map((item) => item.genotype);

  const dominantCount = offspring
    .filter((item) => item.genotype.includes(dominantAllele))
    .reduce((sum, item) => sum + item.probability, 0);
  const recessiveCount = 1 - dominantCount;

  const phenotypes = [
    {
      phenotype: `显性表型（含 ${dominantAllele}）`,
      genotypes: dominantGenotypes,
      probability: dominantCount,
      percentage: `${(dominantCount * 100).toFixed(0)}%`,
    },
    {
      phenotype: `隐性表型（不含 ${dominantAllele}）`,
      genotypes: recessiveGenotypes,
      probability: recessiveCount,
      percentage: `${(recessiveCount * 100).toFixed(0)}%`,
    },
  ];

  return {
    parentA: normalizeGenotype(parentA),
    parentB: normalizeGenotype(parentB),
    dominantAllele,
    offspring,
    phenotypes,
  };
}

// 双基因位点独立分配（自由组合定律）
export interface DihybridResult {
  parentA: string;
  parentB: string;
  offspring: { genotype: string; probability: number; percentage: string }[];
}

export function dihybridCross(parentA: string, parentB: string): DihybridResult {
  // 每个亲本提供两个基因位点，格式如 "AaBb"。
  // 保留大小写，否则 AaBb 会被错误归一化为 AABB 而丢失杂合信息。
  const cleanA = parentA.trim();
  const cleanB = parentB.trim();

  if (!/^[A-Za-z]{4}$/.test(cleanA) || !/^[A-Za-z]{4}$/.test(cleanB)) {
    throw new Error('双基因型必须由四个英文字母组成（如 AaBb），且不能包含空格、数字或符号。');
  }

  // 每个亲本的配子类型（两个位点各取一个等位基因）
  function gametes(genotype: string): string[] {
    const g1 = [genotype[0], genotype[1]];
    const g2 = [genotype[2], genotype[3]];
    const result: string[] = [];
    for (const a of g1) {
      for (const b of g2) {
        result.push(a + b);
      }
    }
    return result;
  }

  const gametesA = gametes(cleanA);
  const gametesB = gametes(cleanB);

  const combos: string[] = [];
  for (const ga of gametesA) {
    for (const gb of gametesB) {
      const locus1 = canonicalAlleles(ga[0], gb[0]);
      const locus2 = canonicalAlleles(ga[1], gb[1]);
      combos.push(locus1 + locus2);
    }
  }

  const counts = new Map<string, number>();
  for (const combo of combos) {
    counts.set(combo, (counts.get(combo) || 0) + 1);
  }

  const offspring = [...counts.entries()]
    .sort((x, y) => compareAlleleKeys(x[0], y[0]))
    .map(([genotype, count]) => ({
      genotype,
      probability: count / 16,
      percentage: `${((count / 16) * 100).toFixed(1)}%`,
    }));

  return { parentA: cleanA, parentB: cleanB, offspring };
}

// 亲缘关系计算（简化：基于 STR 标记的孟德尔相容性检查）
export interface ParentageLocusResult {
  locus: string;
  fatherAlleles: string[];
  motherAlleles: string[];
  offspringAlleles: string[];
  fatherMatch: boolean;
  motherMatch: boolean;
  consistent: boolean;
}

export interface ParentageResult {
  status: 'sufficient' | 'insufficient';
  message: string;
  loci?: ParentageLocusResult[];
  overallConsistency?: string;
}

// 解析 STR 等位基因，格式必须是「等位基因1/等位基因2」，如 12/15。
export function parseStrAlleles(value: string, context = ''): string[] {
  const cleaned = value.trim();
  const prefix = context ? `${context}：` : '';
  if (!cleaned) {
    throw new Error(`${prefix}等位基因不能为空。`);
  }
  if (!cleaned.includes('/')) {
    throw new Error(`${prefix}请使用「等位基因1/等位基因2」格式，例如 12/15。`);
  }

  const rawParts = cleaned.split('/');
  const parts = rawParts.map((part) => part.trim());
  if (parts.length !== 2 || parts.some((part) => !part)) {
    throw new Error(`${prefix}必须恰好包含两个等位基因，格式如 12/15。`);
  }
  if (parts.some((part) => !/^[A-Za-z0-9.]+$/.test(part))) {
    throw new Error(`${prefix}等位基因只能包含字母、数字或小数点。`);
  }
  return parts;
}

function canAssignParentalAlleles(offspring: string[], father: string[], mother: string[]): boolean {
  const [a, b] = offspring;
  return (
    (father.includes(a) && mother.includes(b)) ||
    (father.includes(b) && mother.includes(a))
  );
}

export function parentageCheck(
  father: Record<string, string>,
  mother: Record<string, string>,
  offspring: Record<string, string>
): ParentageResult {
  const loci = Object.keys(offspring);
  if (loci.length < 3) {
    return {
      status: 'insufficient',
      message: '数据不足：亲缘鉴定至少需要 3 个 STR 位点的完整数据。',
    };
  }

  const results: ParentageLocusResult[] = loci.map((locus) => {
    const fatherRaw = father[locus] ?? '';
    const motherRaw = mother[locus] ?? '';
    const offspringRaw = offspring[locus] ?? '';

    const fatherAlleles = parseStrAlleles(fatherRaw, `位点「${locus}」的父本`);
    const motherAlleles = parseStrAlleles(motherRaw, `位点「${locus}」的母本`);
    const offspringAlleles = parseStrAlleles(offspringRaw, `位点「${locus}」的子代`);

    const fatherMatch = offspringAlleles.some((allele) => fatherAlleles.includes(allele));
    const motherMatch = offspringAlleles.some((allele) => motherAlleles.includes(allele));
    const consistent = canAssignParentalAlleles(offspringAlleles, fatherAlleles, motherAlleles);

    return {
      locus,
      fatherAlleles,
      motherAlleles,
      offspringAlleles,
      fatherMatch,
      motherMatch,
      consistent,
    };
  });

  const allConsistent = results.every((item) => item.consistent);
  const overallConsistency = allConsistent
    ? '所有位点均与父母基因型相容，支持候选亲缘关系。'
    : '存在位点不匹配，提示亲缘关系存疑或数据有误。';

  return {
    status: 'sufficient',
    message: `已完成 ${loci.length} 个位点的亲缘相容性分析。`,
    loci: results,
    overallConsistency,
  };
}
