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
import { Box } from '@chakra-ui/react';
import { useFetchList, useRemove } from './service';
import { Resource } from './model';
import { headers, idKey, resourceTitle } from './settings';

export function DepositoList() {
  const { mutateAsync: handleRemove } = useRemove();

  return (
    <Box p={5}>
      <PageTitle>{resourceTitle}</PageTitle>
      <DataGrid query={useFetchList}>
        <Header>
          <SearchField />

          <DeleteButton onConfirm={handleRemove} />

          <ButtonAdd />
        </Header>

        <Table<Resource> idKey={idKey} headers={headers} />

        <Pagination />
      </DataGrid>
    </Box>
  );
}
