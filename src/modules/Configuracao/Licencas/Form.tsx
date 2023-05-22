import {
  FormLabel,
  Input,
  FormControl,
  Box,
  Button,
  Icon,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdCheck } from 'react-icons/md';
import { LicencaFormValues, licencaSchema } from './model';
import { useNavigate } from 'react-router-dom';

interface Props {
  defaultValues?: LicencaFormValues | undefined;
  handleSave: (values: LicencaFormValues) => Promise<any>;
}

export function LicencasForm({ defaultValues, handleSave }: Props) {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LicencaFormValues>({
    resolver: zodResolver(licencaSchema),
    defaultValues,
  });

  function handleCancel() {
    navigate('..');
  }

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      gap={5}
      onSubmit={handleSubmit(handleSave)}
    >
      <FormControl isInvalid={!!errors.cnpj}>
        <FormLabel>CNPJ:</FormLabel>
        <Input {...register('cnpj')} />

        <FormErrorMessage>
          {errors.cnpj && errors.cnpj.message}
        </FormErrorMessage>
      </FormControl>

      <Box>
        <Button variant="link" onClick={handleCancel}>
          Fechar
        </Button>
        <Button colorScheme="green" type="submit" isLoading={isSubmitting}>
          <Icon as={MdCheck} mr={3} />
          Salvar
        </Button>
      </Box>
    </Box>
  );
}
