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
  { key: 'idfornecedor', title: 'ID Fornecedor' },
  { key: 'nome', title: 'Nome' },
  { key: 'cpf', title: 'CPF' },
  { key: 'ie', title: 'IE' },
  { key: 'uf', title: 'UF' },
  { key: 'cidade', title: 'Cidade' },
  { key: 'logradouro', title: 'Logradouro' },
  { key: 'numero', title: 'Número' },
  { key: 'bairro', title: 'Bairro' },
  { key: 'telefone', title: 'Telefone' },
];

interface DataType {
  idfornecedor: string;
  idatividade: number;
  nome: string;
  nomefantasia: string;
  cpf: string;
  ie: string;
  estado: string;
  codcidade: string;
  bairro: string;
  endereco: string;
  numero: number;
  telefone: string;
  cp_fornecedores: number;
}

export function EntradasFornecedores() {
  function handleOpen(id: string) {
    console.log(`opening item #${id}`);
  }

  const query = ({ search, page }: QueryParams) => api.get('/fornecedores');

  return (
    <Box p={5}>
      <PageTitle>Consulta de Fornecedores</PageTitle>
      <DataGrid query={['fornecedores', query]}>
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
