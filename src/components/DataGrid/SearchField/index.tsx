import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';

export function SearchField() {
  return (
    <InputGroup w="auto" mr={3}>
      <InputLeftElement pointerEvents="none">
        <MdSearch />
      </InputLeftElement>
      <Input placeholder="Pesquisar" />
    </InputGroup>
  );
}
