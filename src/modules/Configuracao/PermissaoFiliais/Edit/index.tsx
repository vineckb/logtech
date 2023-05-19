import { useParams } from 'react-router-dom';
import { ConfiguracaoPermissaoFiliaisEditForm } from './Form';
import { Resource } from '../types';
import { AxiosResponse } from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';
import { Text } from '@chakra-ui/react';
import { EditModal } from '@/components/EditModal';
import { queryClient } from '@/App';

export function ConfiguracaoPermissaoFiliaisEdit() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['conexaocliente'],
    queryFn: (): Promise<AxiosResponse<Resource>> =>
      api.get(`/conexaocliente/${id}`),
  });

  const { mutateAsync } = useMutation({
    mutationKey: ['conexao-edit'],
    mutationFn: (values: Resource) => api.post(`/conexaocliente/${id}`, values),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['conexaocliente']);
    },
  });

  async function handleSave(values: any) {
    const data = { ...values, ativo: values.ativo ? 1 : 0 };
    await mutateAsync({ ...resource, ...data });
  }

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  const resource = {
    ...data?.data,
    ativo: Number(data?.data.ativo) === 1,
  };

  return (
    <EditModal
      title={
        <Text as="h3" mb={5}>
          Conexão Cliente #{id}
        </Text>
      }
      onCloseURL="/configuracao/conexao-cliente"
      isLoading={isLoading}
    >
      <ConfiguracaoPermissaoFiliaisEditForm
        defaultValues={resource as Resource}
        handleSave={handleSave}
      />
    </EditModal>
  );
}
