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

export function FieldTipoEndereco({
  isInvalid,
  errorMessage,
  inputProps,
}: Props) {
  const { data: options, isLoading } = useQuery({
    queryKey: ['tipoendereco'],
    queryFn: () => api.get('/tipoendereco'),
    select: (response: any) =>
      response.data.content.map(
        ({
          idtipoendereco,
          nome,
        }: {
          idtipoendereco: string;
          nome: string;
        }) => ({
          value: idtipoendereco,
          label: nome,
        })
      ),
  });

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel mb="0.40rem">
        Tipo de Endereço
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
