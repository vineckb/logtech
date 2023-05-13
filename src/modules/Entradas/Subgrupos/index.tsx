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
  { key: 'idsubgrupo', title: 'ID Subgrupo' },
  { key: 'nome', title: 'Nome' },
  { key: 'grupo', title: 'Grupo' },
  { key: 'ativo', title: 'Ativo' },
];

interface DataType {
  idsubgrupo: string;
  nome: string;
  ativo: string;
  grupo: string;
  cp_grupos: number;
}

export function EntradasSubgrupos() {
  function handleOpen(id: string) {
    console.log(`opening item #${id}`);
  }

  const query = ({ search, page }: QueryParams) => api.get('/subgrupos');

  return (
    <Box p={5}>
      <PageTitle>Consulta de Grupos</PageTitle>
      <DataGrid query={['subgrupos', query]}>
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
