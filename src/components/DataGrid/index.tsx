import { DataGridProvider, QueryParams } from '@/providers/DataGrid';
import { Paper } from '@/components/Paper';
import { UseQueryResult } from '@tanstack/react-query';

interface Props {
  query: (params: QueryParams) => UseQueryResult;
  children: React.ReactElement | React.ReactElement[];
}

export function DataGrid({ query, children }: Props) {
  return (
    <DataGridProvider query={query}>
      <Paper p={5}>{children}</Paper>
    </DataGridProvider>
  );
}

export { ButtonAdd } from './ButtonAdd';
export { DeleteButton } from './DeleteButton';
export { Header } from './Header';
export { Pagination } from './Pagination';
export { SearchField } from './SearchField';
export { Table } from './Table';
