import {
  ButtonAdd,
  DataGrid,
  DeleteButton,
  Header,
  Pagination,
  SearchField,
  Table,
} from '@/components/DataGrid';
import { PageTitle } from '@/components/PageTitle';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Resource } from './model';
import { useFetchList, useRemove } from './service';
import { headers, idKey, resourceTitle } from './settings';

export function UsuarioList() {
  const { mutateAsync: handleRemove } = useRemove();

  return (
    <Box p={5}>
      <PageTitle>Painel de Controle</PageTitle>
      <Breadcrumb mb={3}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/painel">
            Painel de Controle
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <strong>{resourceTitle}</strong>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
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
