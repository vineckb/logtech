export const resourceTitle = 'Conexão';

export const resourceName = 'conexaocliente';

export const idKey = 'idconexao';

export const headers = [
  { key: 'idconexao', title: 'ID' },
  { key: 'nomebd', title: 'Nome do Banco' },
  { key: 'servidor', title: 'Servidor' },
  { key: 'usuario', title: 'Usuário' },
  {
    key: 'ativo',
    title: 'Ativo',
    filter: (value: any): string => (value >= 1 ? 'Sim' : 'Não'),
  },
];
