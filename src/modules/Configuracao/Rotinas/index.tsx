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

const idKey = 'idrotina';

const headers = [
  { key: 'nomerotina', title: 'Nome da Rotina' },
  { key: 'ordem', title: 'Ordem' },
  { key: 'ativo', title: 'Ativo' },
];

interface DataType {
  idrotina: number;
  nomerotina: string;
  ordem: string;
  ativo: string;
}

export function ConfiguracaoRotinas() {
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

  const query = ({ search, page }: QueryParams) => api.get('/rotinas');

  return (
    <Box p={5}>
      <PageTitle>Liberação de Rotinas</PageTitle>
      <DataGrid query={['rotinas', query]}>
        <Header>
          <SearchField />

          <DeleteButton onConfirm={handleRemove} />

          <ButtonAdd onClick={handleAdd}>Adicionar Rotina</ButtonAdd>
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
