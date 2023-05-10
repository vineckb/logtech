import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';

interface Props {
  onSubmit: (q: string) => void;
}

export function SearchField({ onSubmit }: Props) {
  return (
    <InputGroup w="auto" mr={3}>
      <InputLeftElement pointerEvents="none">
        <MdSearch />
      </InputLeftElement>
      <Input placeholder="Pesquisar" />
    </InputGroup>
  );
}
