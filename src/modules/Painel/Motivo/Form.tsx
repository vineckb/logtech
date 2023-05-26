import {
  FormLabel,
  Input,
  FormControl,
  FormErrorMessage,
  Switch,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues, schema } from './model';
import { UpsertForm } from '@/components/UpsertForm';

interface Props {
  defaultValues?: { [x: string]: any };
  handleSave: (values: FormValues) => Promise<any>;
  isLoading?: boolean;
}

export function Form({ isLoading = false, ...props }: Props) {
  return (
    <UpsertForm<FormValues>
      resolver={zodResolver(schema)}
      isLoading={isLoading}
      {...props}
      display="flex"
      flexDirection="column"
      gap={5}
    >
      {(register, errors) => (
        <>
          <FormControl isInvalid={!!errors.nome}>
            <FormLabel>Descrição:</FormLabel>
            <Input {...register('nome')} />

            <FormErrorMessage>
              {errors.nome && errors.nome.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.idtipomotivo}>
            <FormLabel>Tipo:</FormLabel>
            <Input {...register('idtipomotivo')} />

            <FormErrorMessage>
              {errors.idtipomotivo && errors.idtipomotivo.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email-alerts" mb="0">
              Bloqueia estoque?
            </FormLabel>
            <Switch {...register('bloqestoque')} ml={2} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email-alerts" mb="0">
              Ativo?
            </FormLabel>
            <Switch {...register('status')} ml={2} />
          </FormControl>
        </>
      )}
    </UpsertForm>
  );
}
