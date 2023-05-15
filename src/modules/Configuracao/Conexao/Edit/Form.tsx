import { OverviewContent } from '@/components/OverviewModal';
import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { AxiosResponse } from 'axios';
import { ContentSkeleton } from './Skeleton';
import { FormLabel, Input, FormControl, Box } from '@chakra-ui/react';
import { Resource } from '../types';

export function ConfiguracaoConexaoEditForm() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['conexao-overview'],
    queryFn: (): Promise<AxiosResponse<Resource>> =>
      api.get(`/conexaocliente/${id}`),
  });

  if (isLoading) return <ContentSkeleton />;

  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  const resource = data?.data;

  return (
    <OverviewContent>
      <Box display="flex" flexDirection="column" gap={5}>
        <FormControl>
          <FormLabel>Ativo</FormLabel>
          <Input defaultValue={resource?.ativo} />
        </FormControl>

        <FormControl>
          <FormLabel>idbd:</FormLabel>
          <Input defaultValue={resource?.idbd} />
        </FormControl>

        <FormControl>
          <FormLabel>idconexao:</FormLabel>
          <Input defaultValue={resource?.idconexao} />
        </FormControl>

        <FormControl>
          <FormLabel>iderp:</FormLabel>
          <Input defaultValue={resource?.iderp} />
        </FormControl>

        <FormControl>
          <FormLabel>int_carga:</FormLabel>
          <Input defaultValue={resource?.int_carga} />
        </FormControl>

        <FormControl>
          <FormLabel>int_carregamento:</FormLabel>
          <Input defaultValue={resource?.int_carregamento} />
        </FormControl>

        <FormControl>
          <FormLabel>int_clientes:</FormLabel>
          <Input defaultValue={resource?.int_clientes} />
        </FormControl>

        <FormControl>
          <FormLabel>int_clientesregioes:</FormLabel>
          <Input defaultValue={resource?.int_clientesregioes} />
        </FormControl>

        <FormControl>
          <FormLabel>int_clientesrotas:</FormLabel>
          <Input defaultValue={resource?.int_clientesrotas} />
        </FormControl>

        <FormControl>
          <FormLabel>int_filiais:</FormLabel>
          <Input defaultValue={resource?.int_filiais} />
        </FormControl>

        <FormControl>
          <FormLabel>int_fornecedores:</FormLabel>
          <Input defaultValue={resource?.int_fornecedores} />
        </FormControl>

        <FormControl>
          <FormLabel>int_grupos:</FormLabel>
          <Input defaultValue={resource?.int_grupos} />
        </FormControl>

        <FormControl>
          <FormLabel>int_itensnfentrada:</FormLabel>
          <Input defaultValue={resource?.int_itensnfentrada} />
        </FormControl>

        <FormControl>
          <FormLabel>int_itenspedidos:</FormLabel>
          <Input defaultValue={resource?.int_itenspedidos} />
        </FormControl>

        <FormControl>
          <FormLabel>int_motorista:</FormLabel>
          <Input defaultValue={resource?.int_motorista} />
        </FormControl>

        <FormControl>
          <FormLabel>int_nfentrada:</FormLabel>
          <Input defaultValue={resource?.int_nfentrada} />
        </FormControl>

        <FormControl>
          <FormLabel>int_pedidos:</FormLabel>
          <Input defaultValue={resource?.int_pedidos} />
        </FormControl>

        <FormControl>
          <FormLabel>int_produtos:</FormLabel>
          <Input defaultValue={resource?.int_produtos} />
        </FormControl>

        <FormControl>
          <FormLabel>int_subgrupos:</FormLabel>
          <Input defaultValue={resource?.int_subgrupos} />
        </FormControl>

        <FormControl>
          <FormLabel>int_transportadoras:</FormLabel>
          <Input defaultValue={resource?.int_transportadoras} />
        </FormControl>

        <FormControl>
          <FormLabel>int_transportadorasveiculos:</FormLabel>
          <Input defaultValue={resource?.int_transportadorasveiculos} />
        </FormControl>

        <FormControl>
          <FormLabel>int_vendedores:</FormLabel>
          <Input defaultValue={resource?.int_vendedores} />
        </FormControl>

        <FormControl>
          <FormLabel>nomebd:</FormLabel>
          <Input defaultValue={resource?.nomebd} />
        </FormControl>

        <FormControl>
          <FormLabel>senha:</FormLabel>
          <Input defaultValue={resource?.senha} />
        </FormControl>

        <FormControl>
          <FormLabel>servidor:</FormLabel>
          <Input defaultValue={resource?.servidor} />
        </FormControl>

        <FormControl>
          <FormLabel>usuario:</FormLabel>
          <Input defaultValue={resource?.usuario} />
        </FormControl>
      </Box>
    </OverviewContent>
  );
}
