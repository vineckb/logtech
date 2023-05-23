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
          <FormControl isInvalid={!!errors.nomebd}>
            <FormLabel>Nome do banco de dados:</FormLabel>
            <Input {...register('nomebd')} />

            <FormErrorMessage>
              {errors.nomebd && errors.nomebd.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.servidor}>
            <FormLabel>Servidor:</FormLabel>
            <Input {...register('servidor')} />

            <FormErrorMessage>
              {errors.servidor && errors.servidor.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.usuario}>
            <FormLabel>usuario:</FormLabel>
            <Input {...register('usuario')} />

            <FormErrorMessage>
              {errors.usuario && errors.usuario.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.senha}>
            <FormLabel>Senha:</FormLabel>
            <Input {...register('senha')} />

            <FormErrorMessage>
              {errors.usuario && errors.usuario.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Ativo?
            </FormLabel>
            <Switch id="email-alerts" {...register('ativo')} />
          </FormControl>
        </>
      )}
    </UpsertForm>
  );
}
