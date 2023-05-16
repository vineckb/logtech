import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  title: React.ReactNode;
  onCloseURL: string;
  width?: number | string;
}

export function EditModal({
  children,
  title,
  onCloseURL,
  width = '80vw',
}: Props) {
  const navigate = useNavigate();
  function handleClose() {
    navigate(onCloseURL);
  }
  return (
    <Modal isOpen={true} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent minWidth={width}>
        <ModalHeader>
          {title}

          <ModalCloseButton onClick={handleClose} />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
