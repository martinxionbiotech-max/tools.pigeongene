// PigeonGene Tools —— 轻量本地化字典（零依赖，Astro 5）
export type Locale = 'zh' | 'en';

export const LOCALES: { code: Locale; label: string; htmlLang: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'zh', label: '中文', htmlLang: 'zh-CN', dir: 'ltr' },
  { code: 'en', label: 'English', htmlLang: 'en', dir: 'ltr' },
];

export const DEFAULT_LOCALE: Locale = 'zh';

export const UI = {
  zh: {
    siteName: 'PigeonGene Tools — 赛鸽遗传与 DNA 在线工具',
    skipToMain: '跳到主要内容',
    nav: [
      { label: '首页', href: '/' },
      { label: '基因查询', href: '/gene-lookup/' },
      { label: '育种计算器', href: '/breeding-calculator/' },
      { label: '亲缘计算器', href: '/parentage-calculator/' },
    ],
    sisterSites: [
      { label: '主站', href: 'main' },
      { label: '遗传库', href: 'genetics' },
      { label: '健康库', href: 'health' },
      { label: '科研中心', href: 'research' },
    ],
    cta: '检测服务',
    ariaMainNav: '主导航',
    ariaMobileNav: '移动导航',
    ariaOpenMenu: '打开菜单',
    ecosystemTitle: 'PigeonGene 生态',
    switchLabel: 'English',
    footer: {
      tagline: '赛鸽在线工具，由 {org} 提供技术支持。',
      knowledgeTitle: '知识栏目',
      knowledge: [
        { label: '基因查询', href: '/gene-lookup/' },
        { label: '育种计算器', href: '/breeding-calculator/' },
        { label: '亲缘计算器', href: '/parentage-calculator/' },
        { label: '术语表', href: '/glossary/' },
      ],
      ecosystemTitle: 'PigeonGene 生态',
      sisterSites: [
        { label: '主站（检测服务）', href: 'main' },
        { label: '遗传知识库', href: 'genetics' },
        { label: '健康知识库', href: 'health' },
        { label: '科研中心', href: 'research' },
      ],
      helpTitle: '帮助与联系',
      faq: '常见问题',
      glossary: '术语表',
      rights: '保留所有权利',
      mainSite: 'senopigeon.com',
    },
  },
  en: {
    siteName: 'PigeonGene Tools — Online Racing Pigeon Genetics & DNA Utilities',
    skipToMain: 'Skip to main content',
    nav: [
      { label: 'Home', href: '/' },
      { label: 'Gene Lookup', href: '/gene-lookup/' },
      { label: 'Breeding Calculator', href: '/breeding-calculator/' },
      { label: 'Parentage Calculator', href: '/parentage-calculator/' },
    ],
    sisterSites: [
      { label: 'Main site', href: 'main' },
      { label: 'Genetics', href: 'genetics' },
      { label: 'Health', href: 'health' },
      { label: 'Research', href: 'research' },
    ],
    cta: 'Testing services',
    ariaMainNav: 'Main navigation',
    ariaMobileNav: 'Mobile navigation',
    ariaOpenMenu: 'Open menu',
    ecosystemTitle: 'The PigeonGene ecosystem',
    switchLabel: '中文',
    footer: {
      tagline: 'Online racing pigeon tools, supported by {org}.',
      knowledgeTitle: 'Tools',
      knowledge: [
        { label: 'Gene Lookup', href: '/gene-lookup/' },
        { label: 'Breeding Calculator', href: '/breeding-calculator/' },
        { label: 'Parentage Calculator', href: '/parentage-calculator/' },
        { label: 'Glossary', href: '/glossary/' },
      ],
      ecosystemTitle: 'The PigeonGene ecosystem',
      sisterSites: [
        { label: 'Main site (testing services)', href: 'main' },
        { label: 'Genetics library', href: 'genetics' },
        { label: 'Health library', href: 'health' },
        { label: 'Research center', href: 'research' },
      ],
      helpTitle: 'Help & contact',
      faq: 'FAQ',
      glossary: 'Glossary',
      rights: 'All rights reserved',
      mainSite: 'senopigeon.com',
    },
  },
} as const;

// 英文版实体（schema 用；中文原件见 src/data/entity.ts）
export const ENTITY_EN = {
  org: {
    name: 'Zhangjiakou SENO Biotechnology Co., Ltd.',
    description:
      'National High-Tech Enterprise focused on racing pigeon performance gene testing, pathogen detection, and DNA identification / parentage testing.',
    award: [
      'National High-Tech Enterprise',
      'Zhangjiakou Key Genetic Testing Laboratory',
      'Technology-based SME',
    ],
    knowsAbout: [
      'racing pigeon performance gene testing',
      'racing pigeon pathogen detection',
      'DNA identification',
      'parentage testing',
      'real-time quantitative PCR',
      'avian molecular diagnostics',
    ],
    address: {
      addressCountry: 'CN',
      addressRegion: 'Hebei',
      addressLocality: 'Zhangjiakou',
      postalCode: '075000',
      streetAddress: 'Building 3, North Silicon Valley, Qiaodong District',
    },
  },
  website: {
    name: 'PigeonGene Tools',
    description:
      'Online racing pigeon genetics and DNA utilities: gene lookup, breeding calculator, parentage calculator and inbreeding coefficient calculator.',
  },
  services: [
    {
      slug: 'service-performance-dna-testing',
      name: 'Racing Pigeon Performance Gene Testing',
      serviceType: 'Racing Pigeon Performance DNA Testing',
      description:
        'Real-time quantitative PCR panel covering eight performance-related loci (LDHA, DRD4, CRY1, MSTN, LRP8, GSR, F-KER, CASK), reported with a DNA test report and breeding reference notes.',
    },
    {
      slug: 'service-virus-detection',
      name: 'Racing Pigeon Pathogen Detection',
      serviceType: 'Pigeon Pathogen Detection',
      description:
        'Molecular detection of 12 common racing pigeon pathogens (viruses, bacteria, fungi and parasites) by PCR, used for flock health management and disease control.',
    },
    {
      slug: 'service-dna-id-parentage',
      name: 'DNA Identification & Parentage Testing',
      serviceType: 'Pigeon DNA Identification & Parentage Testing',
      description:
        'Racing pigeon DNA identification and parentage testing for pedigree traceability, parentage verification and breeder management.',
    },
  ],
};

export function t(locale: Locale) {
  return UI[locale];
}
