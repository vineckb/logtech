export const resourceTitle = "Consulta de Subgrupos";

export const resourceKey = "subgrupos";

export const idKey = "idsubgrupo";

export const headers = [
  { key: "idsubgrupo", title: "ID Subgrupo" },
  { key: "nome", title: "Nome" },
  { key: "grupos.nome", title: "Grupo" },
  {
    key: "ativo",
    title: "Ativo",
    filter: (v: string) => (v === "s" ? "Sim" : "Não"),
  },
];
