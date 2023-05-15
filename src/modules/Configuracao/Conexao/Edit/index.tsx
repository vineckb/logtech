import {
  OverviewFooter,
  OverviewHeader,
  OverviewModal,
} from '@/components/OverviewModal';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Icon, ModalCloseButton, Text } from '@chakra-ui/react';
import { MdCheck } from 'react-icons/md';
import { ConfiguracaoConexaoEditForm } from './Form';

export function ConfiguracaoConexaoEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClose() {
    navigate('/configuracao/conexao-cliente');
  }

  function handleCancel() {
    navigate(`/configuracao/conexao-cliente/${id}`);
  }

  function handleSave() {}

  return (
    <OverviewModal onClose={handleClose}>
      <OverviewHeader>
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
      </OverviewHeader>
      <ConfiguracaoConexaoEditForm />
      <OverviewFooter>
        <Button variant="link" onClick={handleCancel}>
          Cancelar edição
        </Button>
        <Button colorScheme="green" onClick={handleSave}>
          <Icon as={MdCheck} mr={3} />
          Salvar
        </Button>
      </OverviewFooter>
    </OverviewModal>
  );
}
