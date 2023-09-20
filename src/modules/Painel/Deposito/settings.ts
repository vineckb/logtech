export const resourceTitle = "Cadastro de depósito";
export const resourceSingularName = "Depósito";
export const resourcePluralName = "Depósitos";

// @todo: review endpoint
export const resourceKey = "enderecosdeposito";

export const idKey = "iddeposito";

export const headers = [
  { key: "iddepositoerp", title: "ID ERP" },
  { key: "nome", title: "Descrição" },
  { key: "tipoendereco.nome", title: "Tipo" },
  {
    key: "ativo",
    title: "Ativo",

    filter: (v: number | string) => (v === "s" || v === 1 ? "Sim" : "Não"),
  },
];
