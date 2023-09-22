export const resourceTitle = "Consulta de Veículos Transportadoras";

export const resourceKey = "transportadorasveiculos";

export const idKey = "cp_transportadorasveiculos";

export const headers = [
  { key: "cp_transportadorasveiculos", title: "ID" },
  { key: "idveiculo", title: "Cód Veículo" },
  { key: "nomeveiculo", title: "Descrição" },
  { key: "nomefantasia", title: "Transportadora" },
  {
    key: "ativo",
    title: "Ativo",
    filter: (v: number) => (v === 1 ? "Sim" : "Não"),
  },
];
