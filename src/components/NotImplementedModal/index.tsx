import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function NotImplementedModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Funcionalidade não implementada</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Estamos trabalhando nisso.</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
