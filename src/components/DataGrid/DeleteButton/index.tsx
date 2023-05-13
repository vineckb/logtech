import { useState } from 'react';
import { useDataGrid } from '@/hooks/useDataGrid';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

interface Props<IDType> {
  onConfirm: (id: IDType) => void;
}

export function DeleteButton<IDType = number>({ onConfirm }: Props<IDType>) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { queryResult, selecteds } = useDataGrid();
  const [loading, setLoading] = useState<boolean>(false);

  function handleCancel() {
    onClose();
  }

  async function handleConfirm() {
    setLoading(true);
    await Promise.all(
      await selecteds.map(async (id) => onConfirm(id as IDType))
    );
    await queryResult.refetch();
    setLoading(false);
    onClose();
  }

  return (
    <>
      <Button
        onClick={onOpen}
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar ação</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selecteds.length === 1 && (
              <Text>Você está prestes a deleatar o item selecionado.</Text>
            )}
            {selecteds.length > 1 && (
              <Text>
                Você está prestes a deleatar os{' '}
                <strong>{selecteds.length} itens selecionados</strong>.
              </Text>
            )}
            <Text>
              Esta ação não pode ser revertida, você gostaria de continuar?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              variant="outline"
              mr={3}
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="red"
              isLoading={loading}
              onClick={handleConfirm}
            >
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
