export const resourceTitle = 'Conexão Cliente';

export const resourceKey = 'conexaocliente';

export const idKey = 'idconexao';

export const headers = [
  { key: 'idconexao', title: 'ID' },
  { key: 'nomebd', title: 'Nome do Banco' },
  { key: 'servidor', title: 'Servidor' },
  { key: 'usuario', title: 'Usuário' },
  { key: 'senha', title: 'Senha' },
  { key: 'iderp', title: 'ID ERP' },
  { key: 'tipo', title: 'Tipo' },
  {
    key: 'ativo',
    title: 'Ativo',
    filter: (value: any): string => (value >= 1 ? 'Sim' : 'Não'),
  },
];
