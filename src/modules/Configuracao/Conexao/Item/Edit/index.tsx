import { useParams } from 'react-router-dom';
import { ConfiguracaoConexaoEditForm } from './Form';
import { EditSkeleton } from './Skeleton';
import { Resource } from '../../types';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

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
    <>
      <ConfiguracaoConexaoEditForm defaultValues={resource as Resource} />
    </>
  );
}
