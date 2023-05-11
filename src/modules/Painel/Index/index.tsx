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
import { api } from '@/services/api';
import { Box } from '@chakra-ui/react';

const headers = [
  { key: 'idcliente', title: 'ID' },
  { key: 'nome', title: 'Nome' },
];

interface DataType {
  idcliente: string;
  nome: string;
  nomecidade: string;
  email: string;
  ativo: string;
}

export function PainelIndex() {
  function handleOpen(id: string) {
    console.log(`opening item #${id}`);
  }

  function handleRemove(items: string[]) {
    console.log('removing items:', items);
    return new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1000);
    });
  }

  function handleAdd() {
    console.log('opening form to add new item');
  }

  const query = () => api.get('/clientes');

  return (
    <Box p={5}>
      <PageTitle>Page Title</PageTitle>
      <DataGrid query={query}>
        <Header>
          <SearchField />

          <DeleteButton onConfirm={handleRemove} />

          <ButtonAdd onClick={handleAdd} />
        </Header>

        <Table<DataType>
          idKey="idcliente"
          headers={headers}
          onRowClick={handleOpen}
        />

        <Pagination />
      </DataGrid>
    </Box>
  );
}
