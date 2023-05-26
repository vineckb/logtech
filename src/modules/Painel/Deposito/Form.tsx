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
          <Grid templateColumns="repeat(2, 1fr)" gap={5}>
            <GridItem>
              <FormControl isInvalid={!!errors.iderp}>
                <FormLabel>ID ERP:</FormLabel>
                <Input {...register('iderp')} />

                <FormErrorMessage>
                  {errors.iderp && errors.iderp.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isInvalid={!!errors.nome}>
                <FormLabel>Descrição:</FormLabel>
                <Input {...register('nome')} />

                <FormErrorMessage>
                  {errors.nome && errors.nome.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          </Grid>
          <FormControl isInvalid={!!errors.tipo}>
            <FormLabel>Tipo:</FormLabel>
            <Input {...register('tipo')} />

            <FormErrorMessage>
              {errors.tipo && errors.tipo.message}
            </FormErrorMessage>
          </FormControl>
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
