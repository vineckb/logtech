import { api } from '@/services/api';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Select from 'react-select';
import { AddButton } from './AddButton';

interface Props {
  isInvalid: boolean;
  errorMessage?: React.ReactNode;
}

export function FieldTipoDeposito({
  isInvalid,
  errorMessage,
  ...rest
}: Props) {
  const { data: options, isLoading } = useQuery({
    queryKey: ['tipodeposito'],
    queryFn: () => api.get('/tipodeposito'),
    select: (response: any) =>
      response.data.content.map(
        ({
          idtipodeposito,
          nome,
        }: {
          idtipodeposito: string;
          nome: string;
        }) => ({
          value: idtipodeposito,
          label: nome,
        })
      ),
  });

  return (
    <FormControl isInvalid={isInvalid} mb="0.40rem">
      <FormLabel>
        Tipo de Depósito
        <AddButton />
      </FormLabel>

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
