import { Box, Button, Icon } from '@chakra-ui/react';
import {
  DeepPartial,
  Resolver,
  UseFormRegister,
  useForm,
} from 'react-hook-form';
import { MdCheck } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface Props<T extends { [x: string]: any }> {
  [x: string]: any;
  defaultValues?: { [x: string]: any };
  handleSave: (values: T) => Promise<any>;
  resolver: Resolver<T>;
  children: (register: UseFormRegister<T>, errors: any) => React.ReactElement;
}

export function UpsertForm<T extends { [x: string]: any }>({
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
    defaultValues: defaultValues as DeepPartial<T>,
  });

  function handleCancel() {
    navigate('..');
  }

  return (
    <Box as="form" {...props} onSubmit={handleSubmit(handleSave)}>
      {children(register, errors)}

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
