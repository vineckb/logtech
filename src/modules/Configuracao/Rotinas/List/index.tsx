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
import { useNavigate } from 'react-router-dom';

const idKey = 'idlicenca';

const headers = [
  { key: 'cnpj', title: 'CNPJ' },
  { key: 'cliente', title: 'Cliente' },
  { key: 'qtd_usuarios', title: 'Qtde usuários' },
  { key: 'chave', title: 'Chave' },
  { key: 'status', title: 'Status' },
];

interface DataType {
  idconexao: number;
  cnpj: string;
  cliente: number;
  qtd_usuarios: number;
  chave: string;
  status: string;
}

export function ConfiguracaoRotinasList() {
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

  const query = ({ search, page }: QueryParams) => api.get('/licenca');

  return (
    <Box p={5}>
      <PageTitle>Definição de Licenças</PageTitle>
      <DataGrid query={['licenca', query]}>
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
    </Box>
  );
}
