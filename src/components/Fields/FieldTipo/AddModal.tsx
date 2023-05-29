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
  const handleSave = (data: FormType) => api.post('/tipos', data);

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
