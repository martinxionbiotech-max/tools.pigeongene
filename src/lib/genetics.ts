// 遗传计算逻辑 —— 基于孟德尔遗传定律，计算可复现、有边界条件

// 单基因位点的孟德尔遗传：两个亲本各提供一个等位基因
// 基因型用两个字母表示（如 AA、Aa、aa），A 为显性，a 为隐性
export interface PunnettResult {
  parentA: string;
  parentB: string;
  // 子代基因型组合及概率
  offspring: { genotype: string; probability: number; percentage: string }[];
  // 表型概率（假设 A 显性）
  phenotypes: { phenotype: string; probability: number; percentage: string }[];
}

// 解析基因型为等位基因数组
function parseGenotype(genotype: string): string[] {
  const cleaned = genotype.trim().toUpperCase();
  if (cleaned.length !== 2) {
    throw new Error('基因型必须由两个等位基因组成（如 AA、Aa、aa）');
  }
  return [cleaned[0], cleaned[1]];
}

// 计算单基因位点的 Punnett 方格
export function punnettSquare(parentA: string, parentB: string): PunnettResult {
  const a = parseGenotype(parentA);
  const b = parseGenotype(parentB);

  // 生成 4 个组合
  const combos: string[] = [];
  for (const allele1 of a) {
    for (const allele2 of b) {
      // 组合后排序，使 Aa 与 aA 统一
      combos.push([allele1, allele2].sort().join(''));
    }
  }

  // 统计每种基因型
  const counts = new Map<string, number>();
  for (const c of combos) {
    counts.set(c, (counts.get(c) || 0) + 1);
  }

  // 排序基因型（AA、Aa、aa 顺序）
  const order = ['AA', 'Aa', 'aa'];
  const offspring = order
    .filter((g) => counts.has(g))
    .map((g) => {
      const count = counts.get(g)!;
      const probability = count / 4;
      return {
        genotype: g,
        probability,
        percentage: `${(probability * 100).toFixed(0)}%`,
      };
    });

  // 表型（假设 A 显性）：AA 和 Aa 为显性表型，aa 为隐性表型
  const dominantCount = (counts.get('AA') || 0) + (counts.get('Aa') || 0);
  const recessiveCount = counts.get('aa') || 0;
  const phenotypes = [
    {
      phenotype: '显性表型（AA 或 Aa）',
      probability: dominantCount / 4,
      percentage: `${((dominantCount / 4) * 100).toFixed(0)}%`,
    },
    {
      phenotype: '隐性表型（aa）',
      probability: recessiveCount / 4,
      percentage: `${((recessiveCount / 4) * 100).toFixed(0)}%`,
    },
  ];

  return { parentA: a.join(''), parentB: b.join(''), offspring, phenotypes };
}

// 双基因位点独立分配（自由组合定律）
export interface DihybridResult {
  parentA: string;
  parentB: string;
  offspring: { genotype: string; probability: number; percentage: string }[];
}

export function dihybridCross(parentA: string, parentB: string): DihybridResult {
  // 每个亲本提供两个基因位点，格式如 "AaBb"
  const cleanA = parentA.trim().toUpperCase();
  const cleanB = parentB.trim().toUpperCase();

  if (cleanA.length !== 4 || cleanB.length !== 4) {
    throw new Error('双基因型必须由四个等位基因组成（如 AaBb）');
  }

  // 每个亲本的配子类型（两个位点各取一个等位基因）
  function gametes(genotype: string): string[] {
    const g1 = [genotype[0], genotype[1]]; // 位点1的两个等位基因
    const g2 = [genotype[2], genotype[3]]; // 位点2的两个等位基因
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

  // 16 种组合
  const combos: string[] = [];
  for (const ga of gametesA) {
    for (const gb of gametesB) {
      // 合并两个位点，每个位点排序
      const locus1 = [ga[0], gb[0]].sort().join('');
      const locus2 = [ga[1], gb[1]].sort().join('');
      combos.push(locus1 + locus2);
    }
  }

  const counts = new Map<string, number>();
  for (const c of combos) {
    counts.set(c, (counts.get(c) || 0) + 1);
  }

  const offspring = [...counts.entries()]
    .sort((x, y) => x[0].localeCompare(y[0]))
    .map(([genotype, count]) => ({
      genotype,
      probability: count / 16,
      percentage: `${((count / 16) * 100).toFixed(1)}%`,
    }));

  return { parentA: cleanA, parentB: cleanB, offspring };
}

// 亲缘关系计算（简化：基于 STR 标记的孟德尔相容性检查）
export interface ParentageResult {
  status: 'sufficient' | 'insufficient';
  message: string;
  // 每个位点的匹配情况
  loci?: { locus: string; fatherMatch: boolean; motherMatch: boolean; consistent: boolean }[];
  overallConsistency?: string;
}

export function parentageCheck(
  father: Record<string, string>,
  mother: Record<string, string>,
  offspring: Record<string, string>
): ParentageResult {
  // 提取共有位点
  const loci = Object.keys(offspring);
  if (loci.length < 3) {
    return {
      status: 'insufficient',
      message: '数据不足：亲缘鉴定至少需要 3 个 STR 位点的完整数据。',
    };
  }

  const results = loci.map((locus) => {
    const off = offspring[locus];
    const fatherAlleles = father[locus]?.split('/') || [];
    const motherAlleles = mother[locus]?.split('/') || [];

    // 子代每个等位基因必须来自父母之一
    const offAlleles = off.split('/');
    const allParentAlleles = [...fatherAlleles, ...motherAlleles];

    const fatherMatch = offAlleles.some((a) => fatherAlleles.includes(a));
    const motherMatch = offAlleles.some((a) => motherAlleles.includes(a));

    // 子代两个等位基因都应能在父母中找到来源
    const consistent = offAlleles.every((a) => allParentAlleles.includes(a)) && fatherMatch && motherMatch;

    return { locus, fatherMatch, motherMatch, consistent };
  });

  const allConsistent = results.every((r) => r.consistent);
  const overallConsistency = allConsistent
    ? '所有位点均与父母基因型相容，支持亲缘关系。'
    : '存在位点不匹配，提示亲缘关系存疑或数据有误。';

  return {
    status: 'sufficient',
    message: `已完成 ${loci.length} 个位点的亲缘相容性分析。`,
    loci: results,
    overallConsistency,
  };
}

// DNA 证书验证（模拟 registry 查询，明确返回"未找到"而非猜测）
export interface CertificateResult {
  status: 'found' | 'not_found';
  message: string;
  certificate?: {
    certificateNumber: string;
    dnaId: string;
    issueDate: string;
    testingType: string;
    verificationStatus: string;
  };
}

// 演示用的证书数据库（说明：真实系统应查询 registry.senopigeon.com）
const demoCertificates: Record<string, CertificateResult['certificate']> = {
  'PG-DNA-2026-000001': {
    certificateNumber: 'PG-DNA-2026-000001',
    dnaId: 'PGDNA-8F3A-2C7B-91E4',
    issueDate: '2026-01-15',
    testingType: 'DNA 身份证',
    verificationStatus: '有效',
  },
  'PG-DNA-2026-000002': {
    certificateNumber: 'PG-DNA-2026-000002',
    dnaId: 'PGDNA-4D2E-7A9C-33F1',
    issueDate: '2026-02-20',
    testingType: '飞行能力基因检测',
    verificationStatus: '有效',
  },
};

export function verifyCertificate(certNumber: string): CertificateResult {
  const cleaned = certNumber.trim().toUpperCase();
  if (!cleaned) {
    return { status: 'not_found', message: '请输入证书编号。' };
  }

  const found = demoCertificates[cleaned];
  if (found) {
    return { status: 'found', message: '证书已找到。', certificate: found };
  }

  return {
    status: 'not_found',
    message: `证书未找到：${cleaned}。请核对证书编号，或联系检测机构核实。`,
  };
}
