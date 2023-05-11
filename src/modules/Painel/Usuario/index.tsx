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
  { key: 'nome', title: 'Nome' },
  { key: 'login', title: 'Login' },
  { key: 'datacadastro', title: 'Data de cadastro' },
  { key: 'email', title: 'E-mail' },
  { key: 'telefone', title: 'Telefone' },
  { key: 'status', title: 'Status' },
];

interface DataType {
  idusuario: number;
  nome: string;
  login: string;
  ativo: string;
  datacadastro: string;
  telefone: string;
  email: string;
}

export function PainelUsuario() {
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

  const query = () => api.get('/usuarios');

  return (
    <Box p={5}>
      <PageTitle>Cadastro de Usuários</PageTitle>
      <DataGrid query={['usuarios', query]}>
        <Header>
          <SearchField />

          <DeleteButton onConfirm={handleRemove} />

          <ButtonAdd onClick={handleAdd}>Adicionar Usuário</ButtonAdd>
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
