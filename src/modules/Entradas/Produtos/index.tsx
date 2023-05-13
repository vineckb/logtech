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
  { key: 'idproduto', title: 'ID Produto' },
  { key: 'nome', title: 'Nome' },
  { key: 'cp_fornecedores', title: 'Fornecedor' },
];

interface DataType {
  idproduto: number;
  nome: string;
  cp_fornecedores: string;
}

export function EntradasProdutos() {
  function handleOpen(id: string) {
    console.log(`opening item #${id}`);
  }

  const query = ({ search, page }: QueryParams) => api.get('/produtos');

  return (
    <Box p={5}>
      <PageTitle>Consulta de Produtos</PageTitle>
      <DataGrid query={['produtos', query]}>
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
