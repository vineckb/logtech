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
  { key: 'idrota', title: 'ID Rota' },
  { key: 'nome', title: 'Nome' },
  { key: 'regiao', title: 'Região' },
  { key: 'ativo', title: 'Ativo' },
];

interface DataType {
  idrota: number;
  nome: string;
  regiao: string;
  ativo: string;
}

export function ExpedicoesRotas() {
  function handleOpen(id: string) {
    console.log(`opening item #${id}`);
  }

  // @todo: update path
  const query = ({ search, page }: QueryParams) => api.get('/grupos');

  return (
    <Box p={5}>
      <PageTitle>Consulta de Rotas</PageTitle>
      <DataGrid query={['rotas', query]}>
        <Header>
          <SearchField />
        </Header>

        <Table<DataType>
          selectable={false}
          headers={headers}
          onRowClick={handleOpen}
        />

        <Pagination />
      </DataGrid>
    </Box>
  );
}
