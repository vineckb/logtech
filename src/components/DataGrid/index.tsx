import { DataGridProvider, QueryParams } from '@/providers/DataGrid';
import { Paper } from '../Paper';
import { Box } from '@chakra-ui/react';
import { SearchField } from './SearchField';
import { DeleteButton } from './DeleteButton';
import { Table } from './Table';
import { Pagination } from './Pagination';
import { AxiosResponse } from 'axios';
import { ButtonAdd } from './ButtonAdd';

interface Props {
  idKey?: string;
  headers: { key: string; title: string }[];

  query: (params?: QueryParams) => Promise<AxiosResponse>;

  onOpen: (id: string) => void;
  onRemove: (items: string[]) => void;
  onAdd: () => void;
}

export function DataGrid<DataType>({
  query,
  headers,
  onOpen,
  onRemove,
  onAdd,
  idKey = 'id',
}: Props) {
  return (
    <DataGridProvider query={query}>
      <Paper p={5}>
        <Box
          display="flex"
          flexDirection="row"
          mb={5}
          justifyContent="space-between"
        >
          <SearchField />

          <DeleteButton onConfirm={onRemove} />

          <ButtonAdd onClick={onAdd} />
        </Box>
        <Table<DataType>
          idKey={idKey}
          headers={headers}
          handleRowClick={onOpen}
        />
        <Pagination<DataType> />
      </Paper>
    </DataGridProvider>
  );
}
