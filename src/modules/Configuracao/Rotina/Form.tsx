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
          <FormControl isInvalid={!!errors.nomerotina}>
            <FormLabel>Nome da Rotina:</FormLabel>
            <Input {...register('nomerotina')} />

            <FormErrorMessage>
              {errors.nomerotina && errors.nomerotina.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.idaplicacao}>
            <FormLabel>Aplicação:</FormLabel>
            <Input {...register('idaplicacao')} />

            <FormErrorMessage>
              {errors.idaplicacao && errors.idaplicacao.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.idmenu}>
            <FormLabel>Menu:</FormLabel>
            <Input {...register('idmenu')} />

            <FormErrorMessage>
              {errors.idmenu && errors.idmenu.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.idtiporotina}>
            <FormLabel>Tipo:</FormLabel>
            <Input {...register('idtiporotina')} />

            <FormErrorMessage>
              {errors.idtiporotina && errors.idtiporotina.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.ordem}>
            <FormLabel>Ordem:</FormLabel>
            <Input {...register('ordem')} />

            <FormErrorMessage>
              {errors.ordem && errors.ordem.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.status}>
            <FormLabel htmlFor="email-alerts" mb="0">
              Ativo?
            </FormLabel>
            <Switch {...register('ativo')} ml={2} />
          </FormControl>
        </>
      )}
    </UpsertForm>
  );
}
