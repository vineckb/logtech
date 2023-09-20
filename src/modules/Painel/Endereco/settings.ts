export const resourceTitle = "Cadastro de Endereços";
export const resourceName = "Endereço";

export const resourceKey = "enderecos";

export const idKey = "idendereco";

export const headers = [
  { key: "rua", title: "Rua" },
  { key: "predio", title: "Prédio" },
  { key: "andar", title: "Andar" },
  { key: "apto", title: "Apartamento" },
  { key: "direcao", title: "Direção" },
  { key: "tipo", title: "Tipo" },
  { key: "enderecosestacao.nome", title: "Estação" },
  { key: "enderecosdeposito.nome", title: "Depósito" },
  {
    key: "ativo",
    title: "Ativo",
    filter: (v: number | string) => (v === "s" || v === 1 ? "Sim" : "Não"),
  },
];
