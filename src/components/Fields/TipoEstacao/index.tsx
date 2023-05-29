import { api } from '@/services/api';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Select from 'react-select';
import { AddButton } from './AddButton';

interface Props {
  isInvalid: boolean;
  errorMessage?: React.ReactNode;
  inputProps: any;
}

export function FieldTipoEstacao({
  isInvalid,
  errorMessage,
  inputProps,
}: Props) {
  const { data: options, isLoading } = useQuery({
    queryKey: ['tipoestacao'],
    queryFn: () => api.get('/tipoestacao'),
    select: (response: any) =>
      response.data.content.map(
        ({ idtipoestacao, nome }: { idtipoestacao: string; nome: string }) => ({
          value: idtipoestacao,
          label: nome,
        })
      ),
  });

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>
        Tipo de Estação
        <AddButton />
      </FormLabel>

      <Select
        isLoading={isLoading}
        isClearable={true}
        isSearchable={true}
        options={options}
        {...inputProps}
      />

      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}