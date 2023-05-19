import {
  FormLabel,
  Input,
  FormControl,
  Box,
  ModalFooter,
  Button,
  Icon,
  FormErrorMessage,
  Switch,
} from '@chakra-ui/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdCheck } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  ativo: z.boolean(),
  idconexao: z.number(),
  iderp: z.number(),
  nomebd: z.string().min(1, 'Campo obrigatório'),
  senha: z.string().min(1, 'Campo obrigatório'),
  servidor: z.string().min(1, 'Campo obrigatório'),
  usuario: z.string().min(1, 'Campo obrigatório'),
});

export type FormValues = z.infer<typeof schema>;

interface Props {
  defaultValues: FormValues;
  handleSave: (values: any) => Promise<void>;
}

export function ConfiguracaoPermissaoUsuariosEditForm({
  defaultValues,
  handleSave,
}: Props) {
  const navigate = useNavigate();

  function handleCancel() {
    navigate('../');
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
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
      <FormControl isInvalid={!!errors.nomebd}>
        <FormLabel>Nome do banco de dados:</FormLabel>
        <Input {...register('nomebd')} />

        <FormErrorMessage>
          {errors.nomebd && errors.nomebd.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.servidor}>
        <FormLabel>Servidor:</FormLabel>
        <Input {...register('servidor')} />

        <FormErrorMessage>
          {errors.servidor && errors.servidor.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.usuario}>
        <FormLabel>usuario:</FormLabel>
        <Input {...register('usuario')} />

        <FormErrorMessage>
          {errors.usuario && errors.usuario.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.senha}>
        <FormLabel>Senha:</FormLabel>
        <Input {...register('senha')} />

        <FormErrorMessage>
          {errors.usuario && errors.usuario.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Ativo?
        </FormLabel>
        <Switch id="email-alerts" {...register('ativo')} />
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
