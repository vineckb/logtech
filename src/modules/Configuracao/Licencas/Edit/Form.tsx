import {
  FormLabel,
  Input,
  FormControl,
  Box,
  ModalFooter,
  Button,
  Icon,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdCheck } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useSave } from '../service';
import { LicencaFormValues, licencaSchema } from '../model';

interface Props {
  defaultValues: LicencaFormValues | undefined;
}

export function ConfiguracaoLicencasEditForm({ defaultValues }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutateAsync } = useSave(id);

  function handleCancel() {
    navigate('../');
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LicencaFormValues>({
    resolver: zodResolver(licencaSchema),
    defaultValues,
  });

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      gap={5}
      onSubmit={handleSubmit(mutateAsync as any)}
    >
      <FormControl isInvalid={!!errors.cnpj}>
        <FormLabel>CNPJ:</FormLabel>
        <Input {...register('cnpj')} />

        <FormErrorMessage>
          {errors.cnpj && errors.cnpj.message}
        </FormErrorMessage>
      </FormControl>

      <ModalFooter gap={5}>
        <Button variant="link" onClick={handleCancel}>
          Fechar
        </Button>
        <Button colorScheme="green" type="submit" isLoading={isSubmitting}>
          <Icon as={MdCheck} mr={3} />
          Salvar
        </Button>
      </ModalFooter>
    </Box>
  );
}
