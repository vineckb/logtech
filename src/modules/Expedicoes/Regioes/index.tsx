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
  { key: 'idregiao', title: 'ID Regiao' },
  { key: 'nome', title: 'Nome' },
  { key: 'ativo', title: 'Ativo' },
];

interface DataType {
  idregiao: number;
  nome: string;
  ativo: string;
}

export function ExpedicoesRegioes() {
  function handleOpen(id: string) {
    console.log(`opening item #${id}`);
  }

  // @todo: update api path
  const query = ({ search, page }: QueryParams) => api.get('/grupos');

  return (
    <Box p={5}>
      <PageTitle>Consulta de Regiões</PageTitle>
      <DataGrid query={['regioes', query]}>
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
