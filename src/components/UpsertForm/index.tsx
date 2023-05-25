import { Box, Button, Icon } from '@chakra-ui/react';
import { Resolver, UseFormRegister, useForm } from 'react-hook-form';
import { MdCheck } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { UpsertFormSkeleton } from './Skeleton';

interface Props<T extends { [x: string]: any }> {
  [x: string]: any;
  isLoading: boolean;
  defaultValues?: { [x: string]: any };
  handleSave: (values: T) => Promise<any>;
  resolver: Resolver<T>;
  children: (register: UseFormRegister<T>, errors: any) => React.ReactElement;
}

export function UpsertForm<T extends { [x: string]: any }>({
  isLoading,
  defaultValues,
  handleSave,
  resolver,
  children,
  ...props
}: Props<T>) {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<T>({
    resolver,
    values: defaultValues as T,
  });

  function handleCancel() {
    navigate('..');
  }

  async function _handleSave(data: T) {
    try {
      await handleSave(data);
    } catch (e) {}
  }

  if (isLoading) return <UpsertFormSkeleton />;

  return (
    <Box as="form" {...props} onSubmit={handleSubmit(_handleSave)}>
      {children(register, errors)}

      <Box gap={10} pt={5} pb={5} display="flex" justifyContent="end">
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
