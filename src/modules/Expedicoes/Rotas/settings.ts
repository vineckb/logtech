export const resourceTitle = "Consulta de Rotas";

// @todo: review endpoint
export const resourceKey = "clientesrotas";

export const idKey = "idrota";

export const headers = [
  { key: "idrota", title: "ID Rota" },
  { key: "nome", title: "Descrição" },
  { key: "clientesregioes.nome", title: "Região" },
  {
    key: "ativo",
    title: "Ativo",
    filter: (v: string) => (v.toLowerCase() === "v" ? "Sim" : "Não"),
  },
];
