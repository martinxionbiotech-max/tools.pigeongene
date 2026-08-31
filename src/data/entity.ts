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
  hasCredential: 'ISO 9001 质量管理体系认证',
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
