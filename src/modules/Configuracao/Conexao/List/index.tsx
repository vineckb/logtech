import {
  DataGrid,
  ButtonAdd,
  DeleteButton,
  Header,
  Pagination,
  SearchField,
  Table,
} from '@/components/DataGrid';
import { PageTitle } from '@/components/PageTitle';
import { QueryParams } from '@/providers/DataGrid';
import { api } from '@/services/api';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const idKey = 'idconexao';

const headers = [
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

interface DataType {
  idconexao: number;
  nomedb: string;
  servidor: string;
  usuario: number;
  senha: string;
  iderp: number;
  tipo: string;
  ativo: number;
}

export function ConfiguracaoConexaoList() {
  function handleRemove(items: string[]) {
    console.log('removing items:', items);
    return new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1000);
    });
  }

  const query = ({ search, page }: QueryParams) => api.get('/conexaocliente');

  return (
    <Box p={5}>
      <PageTitle>Conexão Cliente</PageTitle>
      <DataGrid query={['conexaocliente', query]}>
        <Header>
          <SearchField />

          <DeleteButton onConfirm={handleRemove} />

          <ButtonAdd />
        </Header>

        <Table<DataType> idKey={idKey} headers={headers} />

        <Pagination />
      </DataGrid>
      <Outlet />
    </Box>
  );
}
