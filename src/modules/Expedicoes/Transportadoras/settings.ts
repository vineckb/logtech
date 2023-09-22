export const resourceTitle = "Consulta de Transportadoras";

// @todo: review endpoint
export const resourceKey = "transportadoras";

export const idKey = "cp_transportadoras";

export const headers = [
  { key: "idtransportadora", title: "ID Transportadora" },
  { key: "nometransportadora", title: "Nome" },
  { key: "cpfcnpj", title: "CPF ou CNPJ" },
  {
    key: "ativo",
    title: "Ativo",
    filter: (v: string) => (v.toLowerCase() === "v" ? "Sim" : "Não"),
  },
];
