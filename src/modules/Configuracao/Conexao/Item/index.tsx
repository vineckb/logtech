import { Outlet, useNavigate } from 'react-router-dom';
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

export function ConfiguracaoConexaoItem() {
  const basePath = '/configuracao/conexao-cliente';
  const navigate = useNavigate();

  function handleClose() {
    navigate(basePath);
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
