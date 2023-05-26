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
          <Grid templateColumns="repeat(10, 1fr)" gap={5}>
            <GridItem colSpan={2}>
              <FormControl isInvalid={!!errors.iderp}>
                <FormLabel>ID ERP:</FormLabel>
                <Input {...register('iderp')} />

                <FormErrorMessage>
                  {errors.iderp && errors.iderp.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormControl isInvalid={!!errors.nome}>
                <FormLabel>Descrição:</FormLabel>
                <Input {...register('nome')} />

                <FormErrorMessage>
                  {errors.nome && errors.nome.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormControl isInvalid={!!errors.tiposeparacao}>
                <FormLabel>Tipo Separação:</FormLabel>
                <Input {...register('tiposeparacao')} />

                <FormErrorMessage>
                  {errors.tiposeparacao && errors.tiposeparacao.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(10, 1fr)" gap={5}>
            <GridItem colSpan={2}>
              <FormControl isInvalid={!!errors.tipo}>
                <FormLabel>Tipo:</FormLabel>
                <Input {...register('tipo')} />

                <FormErrorMessage>
                  {errors.tipo && errors.tipo.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormControl isInvalid={!!errors.ordenacao}>
                <FormLabel>Ordenação:</FormLabel>
                <Input {...register('ordenacao')} />

                <FormErrorMessage>
                  {errors.ordenacao && errors.ordenacao.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormControl isInvalid={!!errors.deposito}>
                <FormLabel>Depósito:</FormLabel>
                <Input {...register('deposito')} />

                <FormErrorMessage>
                  {errors.deposito && errors.deposito.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          </Grid>

          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Ativo?
            </FormLabel>
            <Switch id="email-alerts" {...register('status')} />
          </FormControl>
        </>
      )}
    </UpsertForm>
  );
}
