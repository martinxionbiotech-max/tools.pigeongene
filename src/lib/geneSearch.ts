import type { GeneLookup } from '../data/genes';

// 基因查询匹配：优先精确匹配代码、英文名、中文名，
// 精确匹配未命中时再做大小写不敏感的包含匹配。
export function searchGene(query: string, genes: GeneLookup[]): GeneLookup | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  const equals = (value: string) => value.toLowerCase() === q;
  const includes = (value: string) => value.toLowerCase().includes(q);

  const exact =
    genes.find((gene) => equals(gene.code) || equals(gene.en) || equals(gene.name)) ?? null;
  if (exact) return exact;

  return (
    genes.find(
      (gene) =>
        includes(gene.code) || includes(gene.en) || includes(gene.name) || includes(gene.category)
    ) ?? null
  );
}
