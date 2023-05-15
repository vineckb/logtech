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
  { key: 'nome', title: 'Nome' },
  { key: 'ativo', title: 'Ativo' },
];

interface DataType {
  idgrupo: number;
  nome: string;
  ativo: string;
}

export function ExpedicoesTransportadoras() {
  function handleOpen(id: string) {
    console.log(`opening item #${id}`);
  }

  const query = ({ search, page }: QueryParams) => api.get('/grupos');

  return (
    <Box p={5}>
      <PageTitle>Consulta de Transportadoras</PageTitle>
      <DataGrid query={['grupos', query]}>
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