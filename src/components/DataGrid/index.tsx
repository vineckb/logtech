import { DataGridProvider, QueryParams } from '@/providers/DataGrid';
import { Paper } from '@/components/Paper';
import { AxiosResponse } from 'axios';

interface Props {
  query: [string, (params: QueryParams) => Promise<AxiosResponse>];
  children: React.ReactElement | React.ReactElement[];
}

export function DataGrid({ query: [queryName, query], children }: Props) {
  return (
    <DataGridProvider queryName={queryName} query={query}>
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
