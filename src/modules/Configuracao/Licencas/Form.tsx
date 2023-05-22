import {
  FormLabel,
  Input,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { LicencaFormValues, licencaSchema } from './model';
import { UpsertForm } from '@/components/UpsertForm';

interface Props {
  defaultValues?: { [x: string]: any };
  handleSave: (values: LicencaFormValues) => Promise<any>;
}

export function LicencaForm(props: Props) {
  return (
    <UpsertForm<LicencaFormValues>
      resolver={zodResolver(licencaSchema)}
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
