export const resourceName = "Liberação de Rotina";
export const resourcePluralTitle = "Liberações de Rotinas";

export const resourceKey = "rotinas";

export const idKey = "idrotina";

export const headers = [
  { key: "idrotina", title: "ID" },
  { key: "nomerotina", title: "Nome da Rotina" },
  {
    key: "ativo",
    title: "Ativo",
    filter: (v: string) => (v.toLowerCase() === "s" ? "Sim" : "Não"),
  },
];
