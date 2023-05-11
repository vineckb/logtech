import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useDataGrid } from '@/hooks/useDataGrid';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';

export function SearchField() {
  const { search, setSearch } = useDataGrid();
  const [value, setValue] = useState<string>(search);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      setSearch(value);
    }
  }

  function handleBlur() {
    setSearch(value);
  }

  return (
    <InputGroup w="auto" mr={3}>
      <InputLeftElement pointerEvents="none">
        <MdSearch />
      </InputLeftElement>
      <Input
        placeholder="Pesquisar"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
    </InputGroup>
  );
}
