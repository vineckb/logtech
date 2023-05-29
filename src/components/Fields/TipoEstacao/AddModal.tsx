import { queryClient } from '@/App';
import { api } from '@/services/api';
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { AddForm, FormType } from './AddForm';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function AddModal({ isOpen, onClose }: Props) {
  async function handleSave(data: FormType) {
    await api.post('/tipoestacao', data);
    onClose();
    queryClient.invalidateQueries(['tipoestacao']);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Adicionar Tipo
          <ModalCloseButton />
        </ModalHeader>
        <AddForm handleSave={handleSave} handleCancel={onClose} />
      </ModalContent>
    </Modal>
  );
}
