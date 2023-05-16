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
import { Outlet, useNavigate } from 'react-router-dom';

const idKey = 'idconexao';

const headers = [
  { key: 'nomedb', title: 'Nome do Banco de Dados' },
  { key: 'servidor', title: 'Servidor' },
  { key: 'usuario', title: 'Usuário' },
  { key: 'senha', title: 'Senha' },
  { key: 'iderp', title: 'ID ERP' },
  { key: 'tipo', title: 'Tipo' },
  { key: 'ativo', title: 'Status' },
];

interface DataType {
  idconexao: number;
  nomedb: string;
  servidor: string;
  usuario: number;
  senha: string;
  iderp: number;
  tipo: string;
  ativo: number;
}

export function ConfiguracaoConexaoList() {
  const navigate = useNavigate();

  function handleOpen(id: string) {
    navigate(`${id}/editar`);
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

  const query = ({ search, page }: QueryParams) => api.get('/conexaocliente');

  return (
    <Box p={5}>
      <PageTitle>Conexão Cliente</PageTitle>
      <DataGrid query={['conexaocliente', query]}>
        <Header>
          <SearchField />

          <DeleteButton onConfirm={handleRemove} />

          <ButtonAdd onClick={handleAdd} />
        </Header>

        <Table<DataType>
          idKey={idKey}
          headers={headers}
          onRowClick={handleOpen}
        />

        <Pagination />
      </DataGrid>
      <Outlet />
    </Box>
  );
}
