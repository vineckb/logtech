import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const schema = z.object({
  nome: z.string().min(1, 'Campo obrigatório'),
});
export type FormType = z.infer<typeof schema>;

interface Props {
  handleCancel: () => void;
  handleSave: (data: FormType) => Promise<any>;
}

export function AddForm({ handleCancel, handleSave }: Props) {
  const {
    handleSubmit,
    register,
    formState: { isLoading, errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const handleSubmitWithoutPropagation = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    handleSubmit(handleSave)(e);
  };

  return (
    <form onSubmit={handleSubmitWithoutPropagation}>
      <ModalBody>
        <FormControl isInvalid={!!errors.nome}>
          <FormLabel>Descrição:</FormLabel>
          <Input {...register('nome')} />

          <FormErrorMessage>
            {errors.nome && errors.nome.message}
          </FormErrorMessage>
        </FormControl>
      </ModalBody>
      <ModalFooter gap={5} pt={10}>
        <Button colorScheme="gray" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button
          colorScheme="facebook"
          type="submit"
          isLoading={isLoading}
          onClick={handleSubmitWithoutPropagation}
        >
          Salvar
        </Button>
      </ModalFooter>
    </form>
  );
}
