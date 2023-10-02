export const resourceName = "Definição de Licença";
export const resourcePluralTitle = "Definições de Licenças";

export const resourceKey = "licenca";

export const idKey = "idlicenca";

export const headers = [
  { key: "cnpj", title: "CNPJ" },
  { key: "cliente", title: "Cliente" },
  { key: "qtd_usuarios", title: "Qtde usuários" },
  { key: "chave", title: "Chave" },
  {
    key: "status",
    title: "Ativo",
    filter: (v: boolean) => (v ? "Sim" : "Não"),
  },
];
