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

const idKey = 'idpermissao';

const headers = [
  { key: 'idrotina', title: 'Rotina' },
  { key: 'idfuncionalidade', title: 'Funcionalidade' },
  { key: 'idusuario', title: 'Usuário' },
  { key: 'dataliberacao', title: 'Data da liberação' },
  { key: 'ativo', title: 'Avito' },
];

interface DataType {
  idpermissao: number;
  idrotina: number;
  idfuncionalidade: number;
  idusuario: number;
  dataliberacao: string;
  ativo: string;
}

export function ConfiguracaoPermissaoFiliais() {
  function handleRemove(items: string[]) {
    console.log('removing items:', items);
    return new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1000);
    });
  }

  const query = ({ search, page }: QueryParams) => api.get('/permissao');

  return (
    <Box p={5}>
      <PageTitle>Permissão de Filiais</PageTitle>
      <DataGrid query={['permissao-filiais', query]}>
        <Header>
          <SearchField />

          <DeleteButton onConfirm={handleRemove} />

          <ButtonAdd />
        </Header>

        <Table<DataType> idKey={idKey} headers={headers} />

        <Pagination />
      </DataGrid>
    </Box>
  );
}
