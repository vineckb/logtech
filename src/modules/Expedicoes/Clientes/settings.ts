export const resourceTitle = "Consulta de Clientes";

export const resourceKey = "clientes";

export const idKey = "cp_clientes";

export const headers = [
  { key: "cp_clientes", title: "ID" },
  { key: "idcliente", title: "Cód. Cliente" },
  { key: "nome", title: "Nome" },
  { key: "email", title: "E-mail" },
  { key: "cpfcnpj", title: "CPF ou CNPJ" },
  {
    key: "ativo",
    title: "Ativo",
    filter: (v: string) => (v.toLowerCase() === "v" ? "Sim" : "Não"),
  },
];
