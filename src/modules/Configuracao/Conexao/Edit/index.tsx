import { useNavigate, useParams } from 'react-router-dom';
import { ConfiguracaoConexaoEditForm } from './Form';
import { EditSkeleton } from './Skeleton';
import { Resource } from '../types';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';
import { Text } from '@chakra-ui/react';
import { EditModal } from '@/components/EditModal';

export function ConfiguracaoConexaoItemEdit() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['conexao-overview'],
    queryFn: (): Promise<AxiosResponse<Resource>> =>
      api.get(`/conexaocliente/${id}`),
  });

  if (isLoading) return <EditSkeleton />;

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  const resource = data?.data;

  return (
    <EditModal
      title={
        <Text as="h3" mb={5}>
          Conexão Cliente #{id}
        </Text>
      }
      onCloseURL="/configuracao/conexao-cliente"
    >
      <ConfiguracaoConexaoEditForm defaultValues={resource as Resource} />
    </EditModal>
  );
}
