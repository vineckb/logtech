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
  { key: 'idveiculo', title: 'ID Veículo' },
  { key: 'name', title: 'Descrição' },
  { key: 'transportadra', title: 'Transportadora' },
  { key: 'ativo', title: 'Ativo' },
];

interface DataType {
  idveiculo: number;
  name: string;
  transportadra: string;
  ativo: string;
}

export function ExpedicoesVeiculosDeTransportadoras() {
  function handleOpen(id: string) {
    console.log(`opening item #${id}`);
  }

  const query = ({ search, page }: QueryParams) =>
    api.get('/transportadorasveiculos');

  return (
    <Box p={5}>
      <PageTitle>Consulta de Veiculos Transportadora</PageTitle>
      <DataGrid query={['veiculos-de-transportadoras', query]}>
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
