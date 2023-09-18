import { api } from '@/services/api';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Select from 'react-select';

interface Props {
  isInvalid: boolean;
  errorMessage?: React.ReactNode;
}

export function FieldEstacaoSelect({
  isInvalid,
  errorMessage,
  ...rest
}: Props) {
  const { data: options, isLoading } = useQuery({
    queryKey: ['enderecosestacao'],
    queryFn: () => api.get('/enderecosestacao'),
    select: (response: any) =>
      response.data.content.map(
        ({
          idenderecosestacao,
          nome,
        }: {
          idenderecosestacao: string;
          nome: string;
        }) => ({
          value: idenderecosestacao,
          label: nome,
        })
      ),
  });

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>Estação</FormLabel>

      <Select
        isLoading={isLoading}
        isClearable={true}
        isSearchable={true}
        options={options}
        {...rest}
      />

      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
