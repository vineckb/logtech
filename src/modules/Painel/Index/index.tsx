import { DataGrid } from '@/components/DataGrid';
import { PageTitle } from '@/components/PageTitle';
import { Box } from '@chakra-ui/react';

const headers = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Nome' },
  { key: 'email', title: 'E-mail' },
];
const items = [
  { id: 'fsad48fsa', name: 'Lorem, ipsum.', email: 'lorem@ipsum.com' },
  { id: 'fsad48fsa1', name: 'Lorem, ipsum.', email: 'lorem@ipsum.com' },
  { id: 'fsad48fsa2', name: 'Lorem, ipsum.', email: 'lorem@ipsum.com' },
];

export function PainelIndex() {
  function handleOpen(id: string) {
    console.log(`opening item #${id}`);
  }

  function handleRemove(items: string[]) {
    console.log('removing items:', items);
  }

  function handleAdd() {
    console.log('opening form to add new item');
  }

  function handleSearch(q: string) {
    console.log(`searching for ${q}`);
  }

  function handlePaginate(page: number) {
    console.log(`navigating to page ${page}`);
  }

  return (
    <Box p={5}>
      <PageTitle>Page Title</PageTitle>
      <DataGrid
        items={items}
        headers={headers}
        onOpen={handleOpen}
        onRemove={handleRemove}
        onAdd={handleAdd}
        onSearch={handleSearch}
        onPaginate={handlePaginate}
      />
    </Box>
  );
}
