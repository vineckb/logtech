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

const headers = [
  { key: 'idmotivo', title: 'ID' },
  { key: 'status', title: 'Status' },
  { key: 'bloqestoque', title: 'Bloqueio de estoque' },
];

interface DataType {
  idmotivo: number;
  status: string;
  bloqestoque: string;
}

export function PainelMotivo() {
  function handleRemove(items: string[]) {
    console.log('removing items:', items);
    return new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1000);
    });
  }

  const query = ({ search, page }: QueryParams) => api.get('/motivos');

  return (
    <Box p={5}>
      <PageTitle>Cadastro de Motivos</PageTitle>
      <DataGrid query={['motivos', query]}>
        <Header>
          <SearchField />

          <DeleteButton onConfirm={handleRemove} />

          <ButtonAdd />
        </Header>

        <Table<DataType> idKey="idmotivo" headers={headers} />

        <Pagination />
      </DataGrid>
    </Box>
  );
}
