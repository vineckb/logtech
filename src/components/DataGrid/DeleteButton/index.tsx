import { useDataGrid } from '@/hooks/useDataGrid';
import { Button } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

interface Props {
  onConfirm: (items: string[]) => void;
}

export function DeleteButton({ onConfirm }: Props) {
  const { selecteds } = useDataGrid();
  return (
    <Button
      isDisabled={selecteds.length === 0}
      colorScheme="red"
      fontSize={11}
      textTransform="uppercase"
      mr={3}
      ml="auto"
    >
      <FaTrash style={{ marginRight: 5 }} fontSize={12} />
      Excluir
    </Button>
  );
}
