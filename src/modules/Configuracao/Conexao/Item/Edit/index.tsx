import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Icon,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react';
import { MdCheck } from 'react-icons/md';
import { ConfiguracaoConexaoEditForm } from './Form';

export function ConfiguracaoConexaoItemEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClose() {
    navigate('..');
  }

  function handleCancel() {
    navigate('../');
  }

  function handleSave() {}

  return (
    <>
      <ModalHeader>
        <Text as="h3" mb={5}>
          Conexão Cliente #{id}
        </Text>

        <Box display="flex" flexDir="row" gap={5} justifyContent="flex-end">
          <Button variant="link" onClick={handleCancel}>
            Cancelar edição
          </Button>
          <Button colorScheme="green" onClick={handleSave}>
            <Icon as={MdCheck} mr={3} />
            Salvar
          </Button>
        </Box>
        <ModalCloseButton onClick={handleClose} />
      </ModalHeader>
      <ConfiguracaoConexaoEditForm />
      <ModalFooter>
        <Button variant="link" onClick={handleCancel}>
          Cancelar edição
        </Button>
        <Button colorScheme="green" onClick={handleSave}>
          <Icon as={MdCheck} mr={3} />
          Salvar
        </Button>
      </ModalFooter>
    </>
  );
}
