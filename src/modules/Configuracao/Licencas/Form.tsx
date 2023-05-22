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
import { useNavigate, useParams } from 'react-router-dom';
import { useSave } from './service';
import { LicencaFormValues, licencaSchema } from './model';

const baseurl = '/configuracao/definicao-de-licencas';

interface Props {
  defaultValues?: LicencaFormValues | undefined;
}

export function LicencasForm({ defaultValues }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutateAsync } = useSave(id);

  async function handleSave(values: LicencaFormValues) {
    const response = await mutateAsync(values);
    if (!id) {
      navigate(`${baseurl}/${response.data.idlicenca}`);
    }
  }

  function handleCancel() {
    navigate(baseurl);
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
