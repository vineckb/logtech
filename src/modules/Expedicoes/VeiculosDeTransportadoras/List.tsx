import {
  DataGrid,
  Header,
  Pagination,
  SearchField,
  Table,
} from '@/components/DataGrid';
import { PageTitle } from '@/components/PageTitle';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Resource } from './model';
import { useFetchList } from './service';
import { headers, idKey, resourceTitle } from './settings';

export function VeiculosDeTrasnportadorasList() {
  return (
    <Box p={5}>
      <PageTitle>{resourceTitle}</PageTitle>
      <DataGrid query={useFetchList}>
        <Header>
          <SearchField />
        </Header>

        <Table<Resource>
          selectable={false}
          editable={false}
          canOpen={true}
          idKey={idKey}
          headers={headers}
        />

        <Pagination />

        <Outlet />
      </DataGrid>
    </Box>
  );
}
