import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { AxiosResponse } from 'axios';
import { ContentSkeleton } from '../Skeleton';
import { Resource } from '../../types';
import {
  Box,
  Button,
  Icon,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

export function ConfiguracaoConexaoItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ['conexao-overview'],
    queryFn: (): Promise<AxiosResponse<Resource>> =>
      api.get(`/conexaocliente/${id}`),
  });

  function handleClose() {
    navigate('./');
  }

  if (isLoading) return <ContentSkeleton />;

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  const resource = data?.data;

  return (
    <>
      <ModalHeader>
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
      </ModalHeader>
      <ModalBody>
        <p>
          <strong>ativo:</strong> {resource?.ativo}
        </p>
        <p>
          <strong>idbd:</strong> {resource?.idbd}
        </p>
        <p>
          <strong>idconexao:</strong> {resource?.idconexao}
        </p>
        <p>
          <strong>iderp:</strong> {resource?.iderp}
        </p>
        <p>
          <strong>int_carga:</strong> {resource?.int_carga}
        </p>
        <p>
          <strong>int_carregamento:</strong> {resource?.int_carregamento}
        </p>
        <p>
          <strong>int_clientes:</strong> {resource?.int_clientes}
        </p>
        <p>
          <strong>int_clientesregioes:</strong> {resource?.int_clientesregioes}
        </p>
        <p>
          <strong>int_clientesrotas:</strong> {resource?.int_clientesrotas}
        </p>
        <p>
          <strong>int_filiais:</strong> {resource?.int_filiais}
        </p>
        <p>
          <strong>int_fornecedores:</strong> {resource?.int_fornecedores}
        </p>
        <p>
          <strong>int_grupos:</strong> {resource?.int_grupos}
        </p>
        <p>
          <strong>int_itensnfentrada:</strong> {resource?.int_itensnfentrada}
        </p>
        <p>
          <strong>int_itenspedidos:</strong> {resource?.int_itenspedidos}
        </p>
        <p>
          <strong>int_motorista:</strong> {resource?.int_motorista}
        </p>
        <p>
          <strong>int_nfentrada:</strong> {resource?.int_nfentrada}
        </p>
        <p>
          <strong>int_pedidos:</strong> {resource?.int_pedidos}
        </p>
        <p>
          <strong>int_produtos:</strong> {resource?.int_produtos}
        </p>
        <p>
          <strong>int_produtosembalagem:</strong>{' '}
          {resource?.int_produtosembalagem}
        </p>
        <p>
          <strong>int_subgrupos:</strong> {resource?.int_subgrupos}
        </p>
        <p>
          <strong>int_transportadoras:</strong> {resource?.int_transportadoras}
        </p>
        <p>
          <strong>int_transportadorasveiculos:</strong>{' '}
          {resource?.int_transportadorasveiculos}
        </p>
        <p>
          <strong>int_vendedores:</strong> {resource?.int_vendedores}
        </p>
        <p>
          <strong>nomebd:</strong> {resource?.nomebd}
        </p>
        <p>
          <strong>senha:</strong> {resource?.senha}
        </p>
        <p>
          <strong>servidor:</strong> {resource?.servidor}
        </p>
        <p>
          <strong>usuario:</strong> {resource?.usuario}
        </p>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline" as={Link} to="..">
          Fechar
        </Button>
      </ModalFooter>
    </>
  );
}
