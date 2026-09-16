// 基因查询数据库 —— 与 genetics 站证据矩阵对齐的 8 个基因位点
export interface GeneLookup {
  code: string;
  name: string;
  en: string;
  category: string;
  function: string;
  associations: string; // 关联表述与证据等级对齐
  evidence: string; // 证据等级 B/C/D
  marker: string;
  references: string;
  related: string[];
}

export const geneDatabase: GeneLookup[] = [
  {
    code: 'LDHA',
    name: '乳酸脱氢酶 A',
    en: 'Lactate Dehydrogenase A',
    category: '能量代谢',
    function: '编码乳酸脱氢酶 A 亚基，参与无氧糖酵解，在高强度运动条件下维持能量供应。',
    associations: '赛鸽专属研究报道其多态性与竞翔存活率存在统计学关联（关联≠因果，也不等于速度）。',
    evidence: 'B',
    marker: 'SNP（单核苷酸多态性）',
    references: 'Ramadan 等（2018），PLOS ONE ｜ PMID: 29775483 ｜ DOI: 10.1371/journal.pone.0195121',
    related: ['MSTN', 'LRP8', 'GSR'],
  },
  {
    code: 'DRD4',
    name: '多巴胺受体 D4',
    en: 'Dopamine Receptor D4',
    category: '神经系统',
    function: '编码多巴胺 D4 受体，参与动机、认知与行为调控。',
    associations: '赛鸽专属研究报道其多态性与竞翔表现存在统计学关联（候选基因关联，非因果）。',
    evidence: 'B',
    marker: 'SNP（单核苷酸多态性）',
    references: 'Proskura 等（2015），Animal Genetics ｜ PMID: 26202371 ｜ DOI: 10.1111/age.12328',
    related: ['CASK', 'CRY1'],
  },
  {
    code: 'CRY1',
    name: '隐花色素 1',
    en: 'Cryptochrome 1',
    category: '生物节律',
    function: '蓝光感受蛋白，参与昼夜节律（生物钟）调控。注意：磁感应分子候选研究聚焦 CRY4，与 CRY1 不同。',
    associations: '赛鸽专属研究报道其多态性与竞翔表现存在统计学关联；不能据此声称 CRY1 是「磁感应基因」。',
    evidence: 'B',
    marker: 'SNP（单核苷酸多态性）',
    references: 'Dybus 等（2021），Animals ｜ PMID: 34573598 ｜ DOI: 10.3390/ani11092632',
    related: ['DRD4', 'CASK'],
  },
  {
    code: 'MSTN',
    name: '肌肉生长抑制素',
    en: 'Myostatin',
    category: '肌肉发育',
    function: '骨骼肌生长负调控因子，抑制肌细胞增殖与分化；功能缺失型变异在哺乳动物中可致肌肉肥大。',
    associations: '鸽类研究报道家鸽 MSTN 多态性（多态性鉴定，不含竞翔表现关联分析）；赛鸽竞翔关联证据有限。',
    evidence: 'D',
    marker: 'SNP（单核苷酸多态性）',
    references: 'Dybus 等（2013），Vet Med ｜ DOI: 10.17221/6654-VETMED；Rodgers & Garikipati 2008，PMID: 18591260',
    related: ['LDHA', 'LRP8'],
  },
  {
    code: 'LRP8',
    name: '脂蛋白受体相关蛋白 8',
    en: 'Lipoprotein Receptor-Related Protein 8',
    category: '能量代谢',
    function: '参与脂质代谢与细胞信号转导，涉及脂肪酸利用，是赛鸽竞翔表现研究的候选基因。',
    associations: '赛鸽专属研究报道其多态性对蛋白功能的结构影响及其与竞翔表现的关系（候选基因关联）。',
    evidence: 'B',
    marker: 'SNP（单核苷酸多态性）',
    references: 'Kulig 等（2025），Int J Biol Macromol ｜ PMID: 40246119 ｜ DOI: 10.1016/j.ijbiomac.2025.143181',
    related: ['LDHA', 'MSTN', 'GSR'],
  },
  {
    code: 'GSR',
    name: '谷胱甘肽还原酶',
    en: 'Glutathione Reductase',
    category: '抗氧化',
    function: '抗氧化系统关键酶，还原氧化型谷胱甘肽，清除活性氧，是赛鸽竞翔表现研究的候选基因。',
    associations: '赛鸽专属研究报道其多态性对蛋白功能的结构影响及其与竞翔表现的关系（候选基因关联）。',
    evidence: 'B',
    marker: 'SNP（单核苷酸多态性）',
    references: 'Kulig 等（2025），Int J Biol Macromol ｜ PMID: 40246119 ｜ DOI: 10.1016/j.ijbiomac.2025.143181',
    related: ['LDHA', 'LRP8'],
  },
  {
    code: 'CASK',
    name: '钙/钙调蛋白依赖性丝氨酸蛋白激酶',
    en: 'Calcium/Calmodulin-Dependent Serine Protein Kinase',
    category: '神经系统',
    function: '参与突触形成、神经信号传导与突触可塑性。',
    associations: '鸽类研究报道鸽类 CASK 多态性，性能关联为次级内容；属初步证据，需谨慎解读。',
    evidence: 'C',
    marker: 'SNP（单核苷酸多态性）',
    references: 'Dybus 等（2023），Animals ｜ PMID: 37443867 ｜ DOI: 10.3390/ani13132070',
    related: ['DRD4', 'CRY1'],
  },
  {
    code: 'F-KER',
    name: '羽角蛋白基因',
    en: 'Feather Keratin Gene',
    category: '羽毛结构',
    function: '编码羽毛角蛋白，影响羽毛强度、弹性与形态；与飞行性能的关系属间接推断。',
    associations: '鸽类研究报道家鸽 F-KER 多态性（多态性鉴定，不含竞翔性能关联分析）；赛鸽竞翔关联证据有限。',
    evidence: 'D',
    marker: '基因家族多态性',
    references: 'Dybus & Haase（2011），Br Poult Sci ｜ PMID: 21491240 ｜ DOI: 10.1080/00071668.2010.549666',
    related: ['MSTN', 'LRP8'],
  },
];
