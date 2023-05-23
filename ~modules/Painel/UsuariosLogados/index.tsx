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

export function PainelUsuariosLogados() {
  function handleRemove(items: string[]) {
    console.log('removing items:', items);
    return new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1000);
    });
  }

  // @todo: set api endpoint
  const query = () => api.get('/clientes');

  return (
    <Box p={5}>
      <PageTitle>
        Usuários Logados <small>/em desenvolvimento</small>
      </PageTitle>
      <DataGrid query={['usuarios-logados', query]}>
        <Header>
          <SearchField />

          <DeleteButton onConfirm={handleRemove} />

          <ButtonAdd />
        </Header>

        <Table<DataType> idKey="idcliente" headers={headers} />

        <Pagination />
      </DataGrid>
    </Box>
  );
}
