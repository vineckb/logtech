import { Outlet, useNavigate } from 'react-router-dom';
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

export function ConfiguracaoConexaoItem() {
  const navigate = useNavigate();

  function handleClose() {
    navigate('..');
  }

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <Outlet />
      </ModalContent>
    </Modal>
  );
}
