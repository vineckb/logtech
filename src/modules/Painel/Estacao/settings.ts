export const resourceTitle = "Cadastro de Estações";
export const resourceName = "Estação";

// @todo: review endpoint
export const resourceKey = "enderecosestacao";

export const idKey = "idestacao";

export const headers = [
  { key: "nome", title: "Estação" },
  { key: "tiposeparacao", title: "Tipo Separação" },
  { key: "tipoestacao.nome", title: "Tipo Estação" },
  { key: "enderecosdeposito.nome", title: "Depósito" },
  {
    key: "ativo",
    title: "Ativo",
    filter: (v: number | string) => (v === "s" || v === 1 ? "Sim" : "Não"),
  },
];
