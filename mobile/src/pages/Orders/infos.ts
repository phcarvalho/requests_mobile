interface PaymentType {
  id: number;
  guid: string;
  name: string;
}

export const paymentTypes: PaymentType[] = [
  { id: 1, guid: "b07ad43e-ea1d-e611-80f9-c4346bb5ff38", name: "BOLETO" },
  { id: 2, guid: "b17ad43e-ea1d-e611-80f9-c4346bb5ff38", name: "DEPOSITO" },
  {
    id: 3,
    guid: "b57ad43e-ea1d-e611-80f9-c4346bb5ff38",
    name: "CARTEIRA (em Mãos)",
  },
  {
    id: 3,
    guid: "31c271fb-3548-e611-80fb-fc15b428f19c",
    name: "CARTEIRA (em Mãos)",
  },
  { id: 4, guid: "b27ad43e-ea1d-e611-80f9-c4346bb5ff38", name: "CHEQUE" },
  { id: 5, guid: "b37ad43e-ea1d-e611-80f9-c4346bb5ff38", name: "BNDES" },
  {
    id: 6,
    guid: "af7ad43e-ea1d-e611-80f9-c4346bb5ff38",
    name: "CARTAO DE CREDITO",
  },
  {
    id: 7,
    guid: "b47ad43e-ea1d-e611-80f9-c4346bb5ff38",
    name: "CARTAO DE DEBITO",
  },
  {
    id: 8,
    guid: "3e95da0a-7427-e611-80fc-c4346bb5ff38",
    name: "DÉBITO AUTOMÁTICO",
  },
  { id: 9, guid: "1369032c-fe2f-e611-80fa-c4346bb59e2c", name: "SEM COBRANÇA" },
  {
    id: 10,
    guid: "1469032c-fe2f-e611-80fa-c4346bb59e2c",
    name: "DESCONTO DE COMISSAO",
  },
  { id: 11, guid: "7c44ba4f-2e36-e611-80fd-c4346bb59e2c", name: "PERMUTA" },
  {
    id: 12,
    guid: "a5f9de43-9da0-e711-80f7-e0071b6e8dc1",
    name: "DESCONTO EM PATROCINIO",
  },
  {
    id: 13,
    guid: "b8f9de43-9da0-e711-80f7-e0071b6e8dc1",
    name: "DESCONTO EM FOLHA",
  },
  {
    id: 14,
    guid: "c1f9de43-9da0-e711-80f7-e0071b6e8dc1",
    name: "ADIANTAMENTO À FORNECEDOR",
  },
  { id: 15, guid: "af443c92-ee44-e911-a959-000d3ac03cbc", name: "CONSIGNADO" },
  { id: 16, guid: "d78da31b-89c4-e911-a959-000d3ac03470", name: "VEICULOS" },
  {
    id: 17,
    guid: "4df96ba7-1bd1-e911-a812-000d3ac18948",
    name: "FINACIAMENTO",
  },
  { id: 19, guid: "a6a49847-f555-eb11-a812-000d3ac1cb1c", name: "REPOM" },
  { id: 20, guid: "e2e4c8d0-541d-ea11-a810-000d3ac1879f", name: "PROMISSÓRIA" },
  {
    id: 80,
    guid: "bff9de43-9da0-e711-80f7-e0071b6e8dc1",
    name: "Acerto de motoristas",
  },
  {
    id: 88,
    guid: "5b15854b-013a-e611-80ff-c4346bb5ff38",
    name: "Crédito p/ Contas a Receber",
  },
  {
    id: 89,
    guid: "b3f9de43-9da0-e711-80f7-e0071b6e8dc1",
    name: "Crédito p/ Faturamento",
  },
];

interface PaymentCondition {
  id: number;
  guid: string;
  name: string;
}

export const paymentConditions: PaymentCondition[] = [
  {
    id: 0,
    guid: "8fe3838e-ac65-eb11-a812-002248367122",
    name: "Cartão de Crédito 7X",
  },
  {
    id: 1,
    guid: "fc706ced-f327-e611-8174-6c3be5b3f178",
    name: "A VISTA - ANTECIPADO",
  },
  { id: 2, guid: "eb706ced-f327-e611-8174-6c3be5b3f178", name: "15 D" },
  { id: 3, guid: "ec706ced-f327-e611-8174-6c3be5b3f178", name: "20 D" },
  { id: 4, guid: "08716ced-f327-e611-8174-6c3be5b3f178", name: "30 D" },
  { id: 5, guid: "4f6568df-5c2e-e611-80f6-fc15b428f19c", name: "15/30/45 D" },
  { id: 6, guid: "09716ced-f327-e611-8174-6c3be5b3f178", name: "45 D" },
  {
    id: 7,
    guid: "1a716ced-f327-e611-8174-6c3be5b3f178",
    name: "15/30/45/60/75 D",
  },
  { id: 8, guid: "ed706ced-f327-e611-8174-6c3be5b3f178", name: "30/45/60 D" },
  { id: 9, guid: "fe706ced-f327-e611-8174-6c3be5b3f178", name: "30/60 D" },
  { id: 10, guid: "13716ced-f327-e611-8174-6c3be5b3f178", name: "60 D" },
  {
    id: 11,
    guid: "f4706ced-f327-e611-8174-6c3be5b3f178",
    name: "15/30/45/60/75/90/105 D",
  },
  {
    id: 12,
    guid: "12716ced-f327-e611-8174-6c3be5b3f178",
    name: "20/40/60/80/100 D",
  },
  {
    id: 13,
    guid: "0a716ced-f327-e611-8174-6c3be5b3f178",
    name: "30/45/60/75/90 D",
  },
  { id: 14, guid: "3e32ffed-bb43-e611-8178-6c3be5b3f178", name: "30/60/90 D" },
  { id: 15, guid: "05716ced-f327-e611-8174-6c3be5b3f178", name: "75 D" },
  {
    id: 16,
    guid: "0b716ced-f327-e611-8174-6c3be5b3f178",
    name: "15/30/45/60/75/90/105/120/135 D",
  },
  {
    id: 17,
    guid: "14716ced-f327-e611-8174-6c3be5b3f178",
    name: "30/45/60/75/90/105/120 D",
  },
  {
    id: 18,
    guid: "06716ced-f327-e611-8174-6c3be5b3f178",
    name: "30/60/90/120 D",
  },
  { id: 19, guid: "0c716ced-f327-e611-8174-6c3be5b3f178", name: "60/75/90 D" },
  { id: 20, guid: "00716ced-f327-e611-8174-6c3be5b3f178", name: "60/90 D" },
  { id: 21, guid: "1b716ced-f327-e611-8174-6c3be5b3f178", name: "90 D" },
  {
    id: 22,
    guid: "0d716ced-f327-e611-8174-6c3be5b3f178",
    name: "30/45/60/75/90/105/120/135/150 D",
  },
  {
    id: 23,
    guid: "0e716ced-f327-e611-8174-6c3be5b3f178",
    name: "30/60/90/120/150 D",
  },
  {
    id: 24,
    guid: "ee706ced-f327-e611-8174-6c3be5b3f178",
    name: "60/75/90/105/120 D",
  },
  { id: 25, guid: "15716ced-f327-e611-8174-6c3be5b3f178", name: "60/90/120 D" },
  { id: 26, guid: "16716ced-f327-e611-8174-6c3be5b3f178", name: "105 D" },
  {
    id: 27,
    guid: "ef706ced-f327-e611-8174-6c3be5b3f178",
    name: "30/60/90/120/150/180 D",
  },
  {
    id: 28,
    guid: "75b8710c-094a-e611-80ff-c4346bb59e2c",
    name: "90/120/150/180/210/240/270/300/330/360 D",
  },
  { id: 29, guid: "e9706ced-f327-e611-8174-6c3be5b3f178", name: "45/60/75 D" },
  { id: 30, guid: "07716ced-f327-e611-8174-6c3be5b3f178", name: "45/75 D" },
  { id: 31, guid: "f9706ced-f327-e611-8174-6c3be5b3f178", name: "45/75/105 D" },
  {
    id: 32,
    guid: "ea706ced-f327-e611-8174-6c3be5b3f178",
    name: "45/60/75/90/105 D",
  },
  { id: 33, guid: "f1706ced-f327-e611-8174-6c3be5b3f178", name: "45/105 D" },
  {
    id: 34,
    guid: "11716ced-f327-e611-8174-6c3be5b3f178",
    name: "45/60/75/90/105/120/135 D",
  },
  {
    id: 35,
    guid: "19716ced-f327-e611-8174-6c3be5b3f178",
    name: "45/75/105/135 D",
  },
  {
    id: 36,
    guid: "f0706ced-f327-e611-8174-6c3be5b3f178",
    name: "30/60/90/120/150/180/210/240/270/300 D",
  },
  {
    id: 37,
    guid: "10716ced-f327-e611-8174-6c3be5b3f178",
    name: "30/35/40/45/50/55/60/65/70/75/80/85/90 D",
  },
  {
    id: 38,
    guid: "03716ced-f327-e611-8174-6c3be5b3f178",
    name: "60/90/120/150",
  },
  { id: 39, guid: "17716ced-f327-e611-8174-6c3be5b3f178", name: "BNDES" },
  {
    id: 40,
    guid: "18716ced-f327-e611-8174-6c3be5b3f178",
    name: "30/50/70/90 D",
  },
  { id: 41, guid: "4d6568df-5c2e-e611-80f6-fc15b428f19c", name: "50/70 D" },
  { id: 42, guid: "486568df-5c2e-e611-80f6-fc15b428f19c", name: "30/90 D" },
  { id: 43, guid: "476568df-5c2e-e611-80f6-fc15b428f19c", name: "7 D" },
  { id: 44, guid: "506568df-5c2e-e611-80f6-fc15b428f19c", name: "10 D" },
  {
    id: 45,
    guid: "496568df-5c2e-e611-80f6-fc15b428f19c",
    name: "30/60/90/120/150/180/210/240/270 D",
  },
  {
    id: 46,
    guid: "466568df-5c2e-e611-80f6-fc15b428f19c",
    name: "30/40/50/60/70/80/90/100/110/120",
  },
  { id: 47, guid: "4e6568df-5c2e-e611-80f6-fc15b428f19c", name: "20/30/40 D" },
  {
    id: 48,
    guid: "4a6568df-5c2e-e611-80f6-fc15b428f19c",
    name: "50/70/90/110/130 D",
  },
  {
    id: 49,
    guid: "516568df-5c2e-e611-80f6-fc15b428f19c",
    name: "30/45/60/75/90/105/120/135/150/165/180",
  },
  {
    id: 52,
    guid: "0034fa37-fe2f-e611-80fa-c4346bb59e2c",
    name: "30/60/90/120/150/180/210/240/270/300/330/360 D",
  },
  {
    id: 53,
    guid: "ff33fa37-fe2f-e611-80fa-c4346bb59e2c",
    name: "60/75/90/105/120/135/150 D",
  },
  {
    id: 54,
    guid: "f23d2b70-ac31-e611-80fa-c4346bb59e2c",
    name: "30/40/50/60/70/80/90 D",
  },
  { id: 55, guid: "f33d2b70-ac31-e611-80fa-c4346bb59e2c", name: "21/42 DIAS" },
  {
    id: 56,
    guid: "d9a0ef5d-2e36-e611-80fa-fc15b428f19c",
    name: "20% ENTRADA + 30/60/90 DIAS ENTREGA",
  },
  { id: 57, guid: "d7a0ef5d-2e36-e611-80fa-fc15b428f19c", name: "20/40 D" },
  {
    id: 58,
    guid: "d8a0ef5d-2e36-e611-80fa-fc15b428f19c",
    name: "60/90/120/150/180/210/240/270/300/330",
  },
  { id: 62, guid: "74b8710c-094a-e611-80ff-c4346bb59e2c", name: "7 D" },
  {
    id: 67,
    guid: "bad314d9-71aa-e611-810c-c4346bb5ff38",
    name: "30 A 120 (5 EM 5 DIAS)",
  },
  {
    id: 69,
    guid: "b9d314d9-71aa-e611-810c-c4346bb5ff38",
    name: "30/60/90/120/150/180/210/240 D",
  },
  {
    id: 71,
    guid: "b5d314d9-71aa-e611-810c-c4346bb5ff38",
    name: "SEM COBRANCA",
  },
  {
    id: 73,
    guid: "b2d314d9-71aa-e611-810c-c4346bb5ff38",
    name: "30/60/90/120/150/180/210 D",
  },
  { id: 74, guid: "b7d314d9-71aa-e611-810c-c4346bb5ff38", name: "165 D" },
  {
    id: 75,
    guid: "b8d314d9-71aa-e611-810c-c4346bb5ff38",
    name: "ENTRADA + 30/60/90/120/150/180/210/240/270",
  },
  {
    id: 77,
    guid: "b6d314d9-71aa-e611-810c-c4346bb5ff38",
    name: "40/60/80/100/120/140 D",
  },
  {
    id: 79,
    guid: "b4d314d9-71aa-e611-810c-c4346bb5ff38",
    name: "60/90/120/150/180/210/240/270/300/330/360/390 D",
  },
  {
    id: 80,
    guid: "b3d314d9-71aa-e611-810c-c4346bb5ff38",
    name: "90/120/150/180 D",
  },
  { id: 81, guid: "a106ae1f-9da0-e711-80f7-e0071b6e8dc1", name: "15/20/25 D" },
  {
    id: 84,
    guid: "ab06ae1f-9da0-e711-80f7-e0071b6e8dc1",
    name: "30/60/90/120/150/180/210",
  },
  { id: 85, guid: "9006ae1f-9da0-e711-80f7-e0071b6e8dc1", name: "150 D" },
  {
    id: 86,
    guid: "9a06ae1f-9da0-e711-80f7-e0071b6e8dc1",
    name: "30 A 240 (15 EM 15 DIAS)",
  },
  {
    id: 87,
    guid: "9e06ae1f-9da0-e711-80f7-e0071b6e8dc1",
    name: "30/60/90/120/150/180/210/240/270...540/570/600",
  },
  { id: 89, guid: "9d06ae1f-9da0-e711-80f7-e0071b6e8dc1", name: "10/15/20 D" },
  {
    id: 92,
    guid: "ae06ae1f-9da0-e711-80f7-e0071b6e8dc1",
    name: "75/90/105/120/135 D",
  },
  {
    id: 93,
    guid: "9406ae1f-9da0-e711-80f7-e0071b6e8dc1",
    name: "60/90/120/150/180 D",
  },
  {
    id: 94,
    guid: "9306ae1f-9da0-e711-80f7-e0071b6e8dc1",
    name: "ENTRADA + 30/60 DIAS",
  },
  {
    id: 98,
    guid: "aa06ae1f-9da0-e711-80f7-e0071b6e8dc1",
    name: "30/60/90/.../450 D (15 X)",
  },
  { id: 100, guid: "d83d68be-7566-eb11-a812-002248367e4d", name: "15/30DD" },
  {
    id: 101,
    guid: "9506ae1f-9da0-e711-80f7-e0071b6e8dc1",
    name: "30/40/50...120/130/140/150 D (CADA 10 DIAS)",
  },
  {
    id: 102,
    guid: "b906ae1f-9da0-e711-80f7-e0071b6e8dc1",
    name: "90/120/150/180/210/240 d",
  },
  {
    id: 103,
    guid: "87614417-67ad-e711-80fb-e0071b6e8dc1",
    name: "30/40/50/60/70/80/90...300 D",
  },
  {
    id: 104,
    guid: "847ff011-a8b3-e711-80fc-e0071b6e8dc1",
    name: "45/75/105/135/165/195/225/255 D",
  },
  {
    id: 105,
    guid: "7a7ff011-a8b3-e711-80fc-e0071b6e8dc1",
    name: "30/45/60/75/90...225/240 D",
  },
  {
    id: 106,
    guid: "7c7ff011-a8b3-e711-80fc-e0071b6e8dc1",
    name: "45/60/75/90/105...240/255 D",
  },
  {
    id: 107,
    guid: "ac0f743c-71b4-e711-80fc-e0071b6e8dc1",
    name: "60/90/120/150/180/210/240/270 D",
  },
  {
    id: 108,
    guid: "8f042e60-f1b9-e711-8104-e0071b6fc061",
    name: "60/90/120/150/180/210 D",
  },
  { id: 109, guid: "7851b588-baba-e711-8104-e0071b6fc061", name: "90/120 D" },
  {
    id: 111,
    guid: "c242ba8e-71bf-e711-8110-70106fa70181",
    name: "60/90/120/150/180/210/240 D",
  },
  {
    id: 112,
    guid: "9b6d95e3-bac5-e711-8112-70106fa70181",
    name: "90/120/150/180/210/230/270/300 D",
  },
  {
    id: 113,
    guid: "45144ab2-5fce-e711-8109-e0071b6fc061",
    name: "30/35/40... A 235/240 (5 EM 5 DIAS)",
  },
  {
    id: 114,
    guid: "1b5f96c9-bc07-e811-811d-70106fa70181",
    name: "ENTRADA + 30/60/90 DIAS",
  },
  {
    id: 115,
    guid: "c22dde7f-7c17-e811-811f-70106fa70181",
    name: "90/120/150 D",
  },
  {
    id: 116,
    guid: "25c803a8-ee44-e911-a951-000d3ac03497",
    name: "60/90/120/150/180/210/240/270/300 D",
  },
  {
    id: 117,
    guid: "a36c40bf-3448-e811-811f-e0071b6e8dc1",
    name: "A VISTA - CARTAO",
  },
  {
    id: 119,
    guid: "50c803a8-ee44-e911-a951-000d3ac03497",
    name: "ENTRADA + 30 DIAS",
  },
  { id: 120, guid: "d0c703a8-ee44-e911-a951-000d3ac03497", name: "60 D (PM)" },
  {
    id: 121,
    guid: "b5c703a8-ee44-e911-a951-000d3ac03497",
    name: "60/90/120/150 (PM)",
  },
  {
    id: 122,
    guid: "d3c703a8-ee44-e911-a951-000d3ac03497",
    name: "60/75/90/105/120/135/150/165/180 D",
  },
  {
    id: 123,
    guid: "0ac803a8-ee44-e911-a951-000d3ac03497",
    name: "10/20/30 DIAS",
  },
  {
    id: 126,
    guid: "d5c703a8-ee44-e911-a951-000d3ac03497",
    name: "ENTRADA + 15 DIAS",
  },
  {
    id: 127,
    guid: "b08efbad-ee44-e911-a951-000d3ac03497",
    name: "60/90/120 (PM)",
  },
  { id: 128, guid: "2ac803a8-ee44-e911-a951-000d3ac03497", name: "120 DIAS" },
  { id: 129, guid: "cec703a8-ee44-e911-a951-000d3ac03497", name: "10/20 DIAS" },
  {
    id: 130,
    guid: "b3c703a8-ee44-e911-a951-000d3ac03497",
    name: "30/60/90/120...330/360/390/420",
  },
  {
    id: 132,
    guid: "f8c703a8-ee44-e911-a951-000d3ac03497",
    name: "60/75/90/105/120/135/150/165...225/240/255/270",
  },
  {
    id: 133,
    guid: "8ec703a8-ee44-e911-a951-000d3ac03497",
    name: "ENTRADA + 30/60/90/120/150/180...390/420/450",
  },
  {
    id: 134,
    guid: "0fc803a8-ee44-e911-a951-000d3ac03497",
    name: "30/60/90/120/150/180/210/240/270/300/330 D",
  },
  { id: 136, guid: "92266be4-81d2-e811-a971-000d3ac1b8d2", name: "25 D" },
  {
    id: 137,
    guid: "2bc803a8-ee44-e911-a951-000d3ac03497",
    name: "30/35/40/45/50/55/60 D",
  },
  { id: 138, guid: "8ac703a8-ee44-e911-a951-000d3ac03497", name: "75/90/105" },
  {
    id: 139,
    guid: "b38efbad-ee44-e911-a951-000d3ac03497",
    name: "75/90/105/120/135/150/165 D",
  },
  {
    id: 140,
    guid: "b8c703a8-ee44-e911-a951-000d3ac03497",
    name: "ENTRADA 30/60/90/120/150/180 DIAS",
  },
  {
    id: 141,
    guid: "b48efbad-ee44-e911-a951-000d3ac03497",
    name: "20/25/30/35/40 D",
  },
  {
    id: 142,
    guid: "ff9c1f6c-ce46-e911-a959-000d3ac03cbc",
    name: "30% ENTRADA 50% NO EMBARQUE 20% NA ENTREGA",
  },
  {
    id: 143,
    guid: "1da006dc-319f-e911-a95a-000d3ac032c1",
    name: "75/90/105/120/135/150/165/180/195 D",
  },
  {
    id: 144,
    guid: "07a006dc-319f-e911-a95a-000d3ac032c1",
    name: "30/45/60/75/90...285/300 D",
  },
  {
    id: 145,
    guid: "31a006dc-319f-e911-a95a-000d3ac032c1",
    name: "60/70/80/90/100/110/120/130/140/150 D",
  },
  {
    id: 146,
    guid: "0da006dc-319f-e911-a95a-000d3ac032c1",
    name: "60/70/80/90/100/.../250/260/270 D",
  },
  {
    id: 148,
    guid: "30a006dc-319f-e911-a95a-000d3ac032c1",
    name: "30% A VISTA + 8X",
  },
  {
    id: 150,
    guid: "2141a824-51a4-e911-a95f-000d3ac03cbc",
    name: "ENTRADA + 30/45/60/75/90D",
  },
  {
    id: 172,
    guid: "cb620fc7-8ba9-ea11-a812-000d3ac17833",
    name: "129 DIAS(HAVAN)",
  },
  {
    id: 175,
    guid: "2d523c33-3be3-ea11-a813-000d3ac1879f",
    name: "ENTRADA + 30/60/90/120",
  },
  {
    id: 189,
    guid: "9cf2e84a-0505-eb11-a813-000d3ac1879f",
    name: "55% AVISTA+30/60/90 DIAS",
  },
];
