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
  { key: 'idcliente', title: 'ID Cliente' },
  { key: 'nome', title: 'Nome' },
  { key: 'email', title: 'E-mail' },
  { key: 'cpfcnpj', title: 'CPF ou CNPJ' },
  { key: 'ativo', title: 'Ativo' },
];

interface DataType {
  idcliente: number;
  nome: string;
  email: string;
  cpfcnpj: string;
  ativo: string;
}

export function ExpedicoesClientes() {
  function handleOpen(id: string) {
    console.log(`opening item #${id}`);
  }

  const query = ({ search, page }: QueryParams) => api.get('/clientes');

  return (
    <Box p={5}>
      <PageTitle>Consulta de Clientes</PageTitle>
      <DataGrid query={['clientes', query]}>
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
