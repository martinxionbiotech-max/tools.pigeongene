// 统一实体数据 —— 四站共享的 PigeonGene 实体定义
export const org = {
  name: '张家口森诺生物科技有限公司',
  alternateName: 'PigeonGene · SENO Biotech',
  legalName: '张家口森诺生物科技有限公司',
  url: 'https://pigeongene.com',
  logo: 'https://pigeongene.com/wp-content/uploads/cropped-cropped-LOGO.png',
  description: '国家高新技术企业，专注赛鸽飞行能力基因检测、病毒检测与 DNA 身份证/亲缘鉴定。',
  address: {
    addressCountry: 'CN',
    addressRegion: '河北省',
    addressLocality: '张家口市',
    streetAddress: '桥东区北硅谷 3 号楼',
  },
  email: 'martin@dnatestingexperts.com',
  telephone: '+86-13323237275',
};

export const ecosystem = {
  main: 'https://pigeongene.com',
  genetics: 'https://genetics.pigeongene.com',
  health: 'https://health.pigeongene.com',
  research: 'https://research.pigeongene.com',
  tools: 'https://tools.pigeongene.com',
};

export const sameAs = [
  org.url,
  ecosystem.genetics,
  ecosystem.health,
  ecosystem.research,
  ecosystem.tools,
];
