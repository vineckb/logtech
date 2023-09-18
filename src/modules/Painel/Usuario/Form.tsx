import {
  FormLabel,
  Input,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
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
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <FormControl isInvalid={!!errors.nome}>
                <FormLabel>Nome:</FormLabel>
                <Input {...register('nome')} />

                <FormErrorMessage>
                  {errors.nome && errors.nome.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isInvalid={!!errors.login}>
                <FormLabel>Login:</FormLabel>
                <Input {...register('login')} />

                <FormErrorMessage>
                  {errors.login && errors.login.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isInvalid={!!errors.senha}>
                <FormLabel>Senha:</FormLabel>
                <Input {...register('senha')} />

                <FormErrorMessage>
                  {errors.senha && errors.senha.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <FormControl isInvalid={!!errors.cpf}>
                <FormLabel>CPF:</FormLabel>
                <Input {...register('cpf')} />

                <FormErrorMessage>
                  {errors.cpf && errors.cpf.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isInvalid={!!errors.telefone}>
                <FormLabel>Telefone:</FormLabel>
                <Input {...register('telefone')} />

                <FormErrorMessage>
                  {errors.telefone && errors.telefone.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          </Grid>
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
