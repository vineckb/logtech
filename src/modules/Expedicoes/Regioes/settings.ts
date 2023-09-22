export const resourceTitle = "Consulta de Regiões";

// @todo: review endpoint
export const resourceKey = "clientesregioes";

export const idKey = "idregiao";

export const headers = [
  { key: "idregiao", title: "ID Regiao" },
  { key: "nome", title: "Descrição" },
  {
    key: "ativo",
    title: "Ativo",
    filter: (v: string) => (v.toLowerCase() === "v" ? "Sim" : "Não"),
  },
];
