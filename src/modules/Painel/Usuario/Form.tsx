import {
  FormLabel,
  Input,
  FormControl,
  FormErrorMessage,
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
          <FormControl isInvalid={!!errors.chave}>
            <FormLabel>Chave:</FormLabel>
            <Input {...register('chave')} />

            <FormErrorMessage>
              {errors.chave && errors.chave.message}
            </FormErrorMessage>
          </FormControl>
        </>
      )}
    </UpsertForm>
  );
}
