// DNA 证书验证的演示数据库 —— 仅用于功能演示，不连接真实检测数据库。
// 真实业务查询应接入 registry.senopigeon.com 或其他受控数据源。

export interface DemoCertificate {
  certificateNumber: string;
  dnaId: string;
  issueDate: string;
  testingType: string;
  verificationStatus: string;
}

export const demoCertificates: Record<string, DemoCertificate> = {
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
  'PG-DNA-2026-000003': {
    certificateNumber: 'PG-DNA-2026-000003',
    dnaId: 'PGDNA-1B7C-5E9A-42D8',
    issueDate: '2026-03-11',
    testingType: 'STR 亲缘鉴定',
    verificationStatus: '有效',
  },
  'PG-DNA-2026-000004': {
    certificateNumber: 'PG-DNA-2026-000004',
    dnaId: 'PGDNA-9E2A-6C4D-88B3',
    issueDate: '2026-04-06',
    testingType: '羽色基因检测',
    verificationStatus: '有效',
  },
  'PG-DNA-2026-000005': {
    certificateNumber: 'PG-DNA-2026-000005',
    dnaId: 'PGDNA-6F8B-3A1E-57C9',
    issueDate: '2026-05-18',
    testingType: '抗病相关基因检测',
    verificationStatus: '有效',
  },
};
