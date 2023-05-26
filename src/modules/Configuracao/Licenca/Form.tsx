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
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <FormControl isInvalid={!!errors.cnpj}>
                <FormLabel>CNPJ:</FormLabel>
                <Input {...register('cnpj')} />

                <FormErrorMessage>
                  {errors.cnpj && errors.cnpj.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isInvalid={!!errors.cliente}>
                <FormLabel>Cliente:</FormLabel>
                <Input {...register('cliente')} />

                <FormErrorMessage>
                  {errors.cliente && errors.cliente.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem>
                  <FormControl isInvalid={!!errors.qtd_usuarios}>
                    <FormLabel>Chave:</FormLabel>
                    <Input {...register('qtd_usuarios')} />

                    <FormErrorMessage>
                      {errors.qtd_usuarios && errors.qtd_usuarios.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={!!errors.dataliberacao}>
                    <FormLabel>Data Liberação:</FormLabel>
                    <Input {...register('dataliberacao')} />

                    <FormErrorMessage>
                      {errors.dataliberacao && errors.dataliberacao.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem>
              <FormControl isInvalid={!!errors.chave}>
                <FormLabel>Chave:</FormLabel>
                <Input {...register('chave')} />

                <FormErrorMessage>
                  {errors.chave && errors.chave.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          </Grid>

          <FormControl isInvalid={!!errors.status}>
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
