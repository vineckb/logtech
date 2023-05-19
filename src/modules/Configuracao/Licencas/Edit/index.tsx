import { useParams } from 'react-router-dom';
import { ConfiguracaoLicencasEditForm } from './Form';
import { Resource } from '../types';
import { AxiosResponse } from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';
import { Text } from '@chakra-ui/react';
import { EditModal } from '@/components/EditModal';
import { queryClient } from '@/App';

export function ConfiguracaoLicencasEdit() {
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
    const data = { ...values, status: values.status ? 1 : 0 };
    await mutateAsync({ ...resource, ...data });
  }

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  const resource = {
    ...data?.data,
    status: Number(data?.data.status) === 1,
  };

  return (
    <EditModal
      title={
        <Text as="h3" mb={5}>
          Definição de licença #{id}
        </Text>
      }
      onCloseURL="/configuracao/definica-de-licencas"
      isLoading={isLoading}
    >
      <ConfiguracaoLicencasEditForm
        defaultValues={resource as Resource}
        handleSave={handleSave}
      />
    </EditModal>
  );
}
