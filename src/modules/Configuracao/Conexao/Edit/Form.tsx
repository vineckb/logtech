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
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdCheck } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { CargaSelect } from '@/components/Fields/CargaSelect';

const schema = z.object({
  ativo: z.number(),
  idbd: z.number(),

  idconexao: z.number(),
  iderp: z.number(),
  int_carga: z.string().min(1, 'Campo obrigatório').min(1, 'Campo obrigatório'),
  int_carregamento: z.string().min(1, 'Campo obrigatório'),
  int_clientes: z.string().min(1, 'Campo obrigatório'),
  int_clientesregioes: z.string().min(1, 'Campo obrigatório'),
  int_clientesrotas: z.string().min(1, 'Campo obrigatório'),
  int_filiais: z.string().min(1, 'Campo obrigatório'),
  int_fornecedores: z.string().min(1, 'Campo obrigatório'),
  int_grupos: z.string().min(1, 'Campo obrigatório'),
  int_itensnfentrada: z.string().min(1, 'Campo obrigatório'),
  int_itenspedidos: z.string().min(1, 'Campo obrigatório'),
  int_motorista: z.string().min(1, 'Campo obrigatório'),
  int_nfentrada: z.string().min(1, 'Campo obrigatório'),
  int_pedidos: z.string().min(1, 'Campo obrigatório'),
  int_produtos: z.string().min(1, 'Campo obrigatório'),
  int_produtosembalagem: z.string().min(1, 'Campo obrigatório'),
  int_subgrupos: z.string().min(1, 'Campo obrigatório'),
  int_transportadoras: z.string().min(1, 'Campo obrigatório'),
  int_vendedores: z.string().min(1, 'Campo obrigatório'),
  nomebd: z.string().min(1, 'Campo obrigatório'),
  senha: z.string().min(1, 'Campo obrigatório'),
  servidor: z.string().min(1, 'Campo obrigatório'),
  usuario: z.string().min(1, 'Campo obrigatório'),
});

export type FormValues = z.infer<typeof schema>;

interface Props {
  defaultValues: FormValues;
}

export function ConfiguracaoConexaoEditForm({ defaultValues }: Props) {
  const navigate = useNavigate();

  function handleCancel() {
    navigate('../');
  }

  function handleSave(values: any) {
    console.log('saving', values);
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
      <FormControl isInvalid={!!errors.ativo}>
        <FormLabel>Ativo</FormLabel>
        <Input {...register('ativo')} />

        <FormErrorMessage>
          {errors.ativo && errors.ativo.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.idbd}>
        <FormLabel>idbd:</FormLabel>
        <Input {...register('idbd')} />

        <FormErrorMessage>
          {errors.idbd && errors.idbd.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.idconexao}>
        <FormLabel>idconexao:</FormLabel>
        <Input {...register('idconexao')} />

        <FormErrorMessage>
          {errors.idconexao && errors.idconexao.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.iderp}>
        <FormLabel>iderp:</FormLabel>
        <Input {...register('iderp')} />

        <FormErrorMessage>
          {errors.iderp && errors.iderp.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_carga}>
        <FormLabel>Carga:</FormLabel>
        <CargaSelect />

        <FormErrorMessage>
          {errors.int_carga && errors.int_carga.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_carregamento}>
        <FormLabel>int_carregamento:</FormLabel>
        <Input {...register('int_carregamento')} />

        <FormErrorMessage>
          {errors.int_carregamento && errors.int_carregamento.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_clientes}>
        <FormLabel>int_clientes:</FormLabel>
        <Input {...register('int_clientes')} />

        <FormErrorMessage>
          {errors.int_clientes && errors.int_clientes.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_clientesregioes}>
        <FormLabel>int_clientesregioes:</FormLabel>
        <Input {...register('int_clientesregioes')} />

        <FormErrorMessage>
          {errors.int_clientesregioes && errors.int_clientesregioes.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_clientesrotas}>
        <FormLabel>int_clientesrotas:</FormLabel>
        <Input {...register('int_clientesrotas')} />

        <FormErrorMessage>
          {errors.int_clientesrotas && errors.int_clientesrotas.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_filiais}>
        <FormLabel>int_filiais:</FormLabel>
        <Input {...register('int_filiais')} />

        <FormErrorMessage>
          {errors.int_filiais && errors.int_filiais.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_fornecedores}>
        <FormLabel>int_fornecedores:</FormLabel>
        <Input {...register('int_fornecedores')} />

        <FormErrorMessage>
          {errors.int_fornecedores && errors.int_fornecedores.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_grupos}>
        <FormLabel>int_grupos:</FormLabel>
        <Input {...register('int_grupos')} />

        <FormErrorMessage>
          {errors.int_grupos && errors.int_grupos.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_itensnfentrada}>
        <FormLabel>int_itensnfentrada:</FormLabel>
        <Input {...register('int_itensnfentrada')} />

        <FormErrorMessage>
          {errors.int_itensnfentrada && errors.int_itensnfentrada.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_itenspedidos}>
        <FormLabel>int_itenspedidos:</FormLabel>
        <Input {...register('int_itenspedidos')} />

        <FormErrorMessage>
          {errors.int_itenspedidos && errors.int_itenspedidos.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_motorista}>
        <FormLabel>int_motorista:</FormLabel>
        <Input {...register('int_motorista')} />

        <FormErrorMessage>
          {errors.int_motorista && errors.int_motorista.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_nfentrada}>
        <FormLabel>int_nfentrada:</FormLabel>
        <Input {...register('int_nfentrada')} />

        <FormErrorMessage>
          {errors.int_nfentrada && errors.int_nfentrada.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_pedidos}>
        <FormLabel>int_pedidos:</FormLabel>
        <Input {...register('int_pedidos')} />

        <FormErrorMessage>
          {errors.int_pedidos && errors.int_pedidos.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_produtos}>
        <FormLabel>int_produtos:</FormLabel>
        <Input {...register('int_produtos')} />

        <FormErrorMessage>
          {errors.int_produtos && errors.int_produtos.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_subgrupos}>
        <FormLabel>int_subgrupos:</FormLabel>
        <Input {...register('int_subgrupos')} />

        <FormErrorMessage>
          {errors.int_subgrupos && errors.int_subgrupos.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_transportadoras}>
        <FormLabel>int_transportadoras:</FormLabel>
        <Input {...register('int_transportadoras')} />

        <FormErrorMessage>
          {errors.int_transportadoras && errors.int_transportadoras.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.int_vendedores}>
        <FormLabel>int_vendedores:</FormLabel>
        <Input {...register('int_vendedores')} />

        <FormErrorMessage>
          {errors.int_vendedores && errors.int_vendedores.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.nomebd}>
        <FormLabel>nomebd:</FormLabel>
        <Input {...register('nomebd')} />

        <FormErrorMessage>
          {errors.nomebd && errors.nomebd.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.nomebd}>
        <FormLabel>senha:</FormLabel>
        <Input {...register('nomebd')} />

        <FormErrorMessage>
          {errors.nomebd && errors.nomebd.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.servidor}>
        <FormLabel>servidor:</FormLabel>
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

      <ModalFooter gap={5}>
        <Button variant="link" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button colorScheme="green" type="submit" isLoading={isSubmitting}>
          <Icon as={MdCheck} mr={3} />
          Salvar
        </Button>
      </ModalFooter>
    </Box>
  );
}
