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
  { key: 'rua', title: 'Rua' },
  { key: 'predio', title: 'Prédio' },
  { key: 'andar', title: 'Andar' },
  { key: 'apto', title: 'Apartamento' },
  { key: 'direcao', title: 'Direção' },
  { key: 'ativo', title: 'Ativo' },
];

interface DataType {
  idendereco: number;
  rua: string;
  predio: number;
  andar: number;
  apto: string;
  direcao: string;
  ativo: number;
}

export function PainelEndereco() {
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

  const query = () => api.get('/enderecos');

  return (
    <Box p={5}>
      <PageTitle>Cadastro de endereços</PageTitle>
      <DataGrid query={['enderecos', query]}>
        <Header>
          <SearchField />

          <DeleteButton onConfirm={handleRemove} />

          <ButtonAdd onClick={handleAdd}>Adicionar Endereço</ButtonAdd>
        </Header>

        <Table<DataType>
          idKey="idendereco"
          headers={headers}
          onRowClick={handleOpen}
        />

        <Pagination />
      </DataGrid>
    </Box>
  );
}
