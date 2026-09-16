// 统一实体数据 —— 四站共享的 PigeonGene 实体定义
export const org = {
  name: '张家口赛诺生物科技有限公司',
  alternateName: ['PigeonGene · SENO Biotech', '赛诺生物'],
  legalName: '张家口赛诺生物科技有限公司',
  url: 'https://senopigeon.com',
  logo: 'https://senopigeon.com/wp-content/uploads/cropped-cropped-LOGO.png',
  description: '国家高新技术企业，专注赛鸽飞行能力基因检测、病毒检测与 DNA 身份证/亲缘鉴定。',
  foundingDate: '2014',
  numberOfEmployees: 15,
  award: ['国家高新技术企业', '张家口市重点基因检测实验室', '科技型中小企业'],
  knowsAbout: [
    '赛鸽飞行能力基因检测',
    '赛鸽病毒检测',
    'DNA 身份证',
    '亲缘鉴定',
    '实时荧光定量 PCR',
    '禽类分子诊断',
  ],
  areaServed: 'Worldwide',
  address: {
    addressCountry: 'CN',
    addressRegion: '河北省',
    addressLocality: '张家口市',
    postalCode: '075000',
    streetAddress: '桥东区北硅谷 3 号楼',
  },
  email: 'martin@senobiocorp.com',
  telephone: '+86 13323237275',
};

export const ecosystem = {
  main: 'https://senopigeon.com',
  genetics: 'https://genetics.senopigeon.com',
  health: 'https://health.senopigeon.com',
  research: 'https://research.senopigeon.com',
  tools: 'https://tool.senopigeon.com',
};

export const sameAs = [
  org.url,
  ecosystem.genetics,
  ecosystem.health,
  ecosystem.research,
  ecosystem.tools,
];

export const services = [
  {
    slug: 'service-performance-dna-testing',
    name: '赛鸽飞行能力基因检测',
    serviceType: 'Racing Pigeon Performance DNA Testing',
    description:
      '基于实时荧光定量 PCR 的赛鸽飞行能力基因检测，覆盖 LDHA、DRD4、CRY1、MSTN、LRP8、GSR、F-KER、CASK 八大性能基因位点，出具 DNA 检测报告与育种建议。',
  },
  {
    slug: 'service-virus-detection',
    name: '赛鸽病毒检测',
    serviceType: 'Pigeon Pathogen Detection',
    description:
      '赛鸽常见病原的分子检测，覆盖病毒、细菌、寄生虫等 12 种病原的 PCR 检测，用于鸽群健康管理与疾病防控。',
  },
  {
    slug: 'service-dna-id-parentage',
    name: 'DNA 身份证与亲缘鉴定',
    serviceType: 'Pigeon DNA Identification & Parentage Testing',
    description: '赛鸽 DNA 身份证与亲缘鉴定，用于血统溯源、亲子鉴定与种鸽管理。',
  },
];
