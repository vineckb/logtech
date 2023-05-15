import {
  OverviewFooter,
  OverviewHeader,
  OverviewModal,
} from '@/components/OverviewModal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Icon, ModalCloseButton, Text } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { ConfiguracaoConexaoItemContent } from './content';

export function ConfiguracaoConexaoItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClose() {
    navigate('/configuracao/conexao-cliente');
  }

  return (
    <OverviewModal onClose={handleClose}>
      <OverviewHeader>
        <Text as="h3" mb={5}>
          Conexão Cliente #{id}
        </Text>

        <Box display="flex" flexDir="row" gap={5} justifyContent="flex-end">
          <Button variant="link">
            <Icon as={FaTrash} mr={3} />
            Remover
          </Button>
          <Button as={Link} colorScheme="blue" to="editar">
            <Icon as={MdEdit} mr={3} />
            Editar
          </Button>
        </Box>
        <ModalCloseButton onClick={handleClose} />
      </OverviewHeader>
      <ConfiguracaoConexaoItemContent />
      <OverviewFooter>
        <Button variant="outline" onClick={handleClose}>
          Fechar
        </Button>
      </OverviewFooter>
    </OverviewModal>
  );
}
