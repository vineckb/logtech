import { DataGridProvider } from '@/providers/DataGrid';
import { Paper } from '../Paper';
import { Box } from '@chakra-ui/react';
import { SearchField } from './SearchField';
import { DeleteButton } from './DeleteButton';
import { PrimaryButton } from '../PrimaryButton';
import { MdAdd } from 'react-icons/md';
import { Table } from './Table';

interface Props {
  items: any[];
  headers: { key: string; title: string }[];

  onOpen: (id: string) => void;
  onRemove: (items: string[]) => void;
  onAdd: () => void;
  onSearch: (q: string) => void;
  onPaginate: (page: number) => void;
}

export function DataGrid({
  items,
  headers,
  onOpen,
  onRemove,
  onAdd,
  onSearch,
  onPaginate,
}: Props) {
  return (
    <DataGridProvider>
      <Paper p={5}>
        <Box
          display="flex"
          flexDirection="row"
          mb={5}
          justifyContent="space-between"
        >
          <SearchField onSubmit={onSearch} />

          <DeleteButton onConfirm={onRemove} />

          <PrimaryButton onClick={onAdd}>
            <MdAdd fontSize={18} style={{ marginRight: '5px' }} />
            Adicionar uma rota
          </PrimaryButton>
        </Box>
        <Table headers={headers} items={items} handleRowClick={onOpen} />
      </Paper>
    </DataGridProvider>
  );
}
