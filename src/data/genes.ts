// 基因查询数据库 —— 与 genetics 站共享的 8 大基因位点
export interface GeneLookup {
  code: string;
  name: string;
  en: string;
  category: string;
  function: string;
  associations: string; // 用"可能关联"表述
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
    associations: '研究提示其多态性可能与短距离速度表现存在关联（关联性证据，非因果结论）。',
    marker: 'SNP（单核苷酸多态性）',
    references: 'Proskura 等（2014），Journal of Poultry Science',
    related: ['MSTN', 'LRP8', 'GSR'],
  },
  {
    code: 'DRD4',
    name: '多巴胺受体 D4',
    en: 'Dopamine Receptor D4',
    category: '神经系统',
    function: '编码多巴胺 D4 受体，参与动机、认知与行为调控。',
    associations: '研究提示其变异可能与导航能力、认知功能及归巢倾向存在关联（探索性）。',
    marker: 'VNTR / SNP',
    references: 'Kolvenbag 等（2022）',
    related: ['CASK', 'CRY1'],
  },
  {
    code: 'CRY1',
    name: '隐花色素 1',
    en: 'Cryptochrome 1',
    category: '生物节律',
    function: '蓝光感受蛋白，参与昼夜节律（生物钟）调控。',
    associations: '研究提示其变异可能影响光周期感知与比赛状态的时间节律（探索性）。',
    marker: 'SNP',
    references: '昼夜节律生物学综述',
    related: ['DRD4', 'CASK'],
  },
  {
    code: 'MSTN',
    name: '肌肉生长抑制素',
    en: 'Myostatin',
    category: '肌肉发育',
    function: '骨骼肌生长负调控因子，抑制肌细胞增殖与分化。',
    associations: '研究提示其多态性可能与肌肉发育、力量及耐力水平存在关联。',
    marker: 'SNP',
    references: 'Dybus 等（2013），Veterinární medicína',
    related: ['LDHA', 'LRP8'],
  },
  {
    code: 'LRP8',
    name: '脂蛋白受体相关蛋白 8',
    en: 'Lipoprotein Receptor-Related Protein 8',
    category: '能量代谢',
    function: '参与脂质代谢与细胞信号转导，涉及脂肪酸利用。',
    associations: '研究提示其变异可能与长途飞行能量利用效率存在关联（探索性）。',
    marker: 'SNP',
    references: '脂蛋白受体家族研究综述',
    related: ['LDHA', 'MSTN', 'GSR'],
  },
  {
    code: 'GSR',
    name: '谷胱甘肽还原酶',
    en: 'Glutathione Reductase',
    category: '抗氧化',
    function: '抗氧化系统关键酶，还原氧化型谷胱甘肽，清除活性氧。',
    associations: '研究提示其变异可能与抗氧化能力及应激恢复存在关联（探索性）。',
    marker: 'SNP',
    references: '运动生理学氧化应激综述',
    related: ['LDHA', 'LRP8'],
  },
  {
    code: 'CASK',
    name: '钙/钙调蛋白依赖性丝氨酸蛋白激酶',
    en: 'Calcium/Calmodulin-Dependent Serine Protein Kinase',
    category: '神经系统',
    function: '参与突触形成、神经信号传导与突触可塑性。',
    associations: '研究提示其变异可能与神经稳定性及学习能力存在潜在关联（探索性）。',
    marker: 'SNP',
    references: '神经生物学 CASK 研究综述',
    related: ['DRD4', 'CRY1'],
  },
  {
    code: 'F-KER',
    name: '羽角蛋白基因',
    en: 'Feather Keratin Gene',
    category: '羽毛结构',
    function: '编码羽毛角蛋白，影响羽毛强度、弹性与形态。',
    associations: '研究提示其变异可能与羽毛质量及空气动力学效率存在关联（探索性）。',
    marker: '基因家族多态性',
    references: '鸟类羽毛结构蛋白研究综述',
    related: ['MSTN', 'LRP8'],
  },
];
