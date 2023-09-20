export const resourceTitle = "Cadastro de Usuários";
export const resourceName = "Usuário";

export const resourceKey = "usuarios";

export const idKey = "idusuario";

export const headers = [
  { key: "nome", title: "Nome" },
  { key: "login", title: "Login" },
  { key: "datacadastro", title: "Data de cadastro" },
  { key: "email", title: "E-mail" },
  { key: "telefone", title: "Telefone" },
  {
    key: "ativo",
    title: "Status",
    filter: (v: number | string) => (v === "s" || v === 1 ? "Sim" : "Não"),
  },
];
