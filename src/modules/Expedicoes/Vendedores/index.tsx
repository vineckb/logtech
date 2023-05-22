import {
  DataGrid,
  Header,
  Pagination,
  SearchField,
  Table,
} from '@/components/DataGrid';
import { PageTitle } from '@/components/PageTitle';
import { QueryParams } from '@/providers/DataGrid';
import { api } from '@/services/api';
import { Box } from '@chakra-ui/react';

const headers = [
  { key: 'idgrupo', title: 'ID' },
  { key: 'nome', title: 'Vendedor' },
  { key: 'ativo', title: 'Ativo' },
];

interface DataType {
  idgrupo: number;
  nome: string;
  ativo: string;
}

export function ExpedicoesVendedores() {
  // @todo: update path
  const query = ({ search, page }: QueryParams) => api.get('/grupos');

  return (
    <Box p={5}>
      <PageTitle>Consulta de Vendedores</PageTitle>
      <DataGrid query={['vendedores', query]}>
        <Header>
          <SearchField />
        </Header>

        <Table<DataType> selectable={false} headers={headers} />

        <Pagination />
      </DataGrid>
    </Box>
  );
}
