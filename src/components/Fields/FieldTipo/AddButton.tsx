import { FieldLabel } from '@/components/DetailsModal';
import { api } from '@/services/api';
import {
  Button,
  FormControl,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { MdAdd } from 'react-icons/md';
import { z } from 'zod';

export const schema = z.object({
  nome: z.string().min(1, 'Campo obrigatório'),
});
export type FormType = z.infer<typeof schema>;

export function AddButton() {
  const { isOpen, getButtonProps, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    formState: { isLoading },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const handleSubmitWithoutPropagation = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    handleSubmit((data: FormType) => api.post('/tipos', data))(e);
  };

  return (
    <>
      <IconButton
        aria-label="Adicionar Tipo"
        variant="outline"
        colorScheme="facebook"
        rounded="full"
        ml={3}
        size="sm"
        {...getButtonProps()}
      >
        <MdAdd />
      </IconButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Adicionar Tipo
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <FormControl>
              <FieldLabel>Descrição</FieldLabel>
              <Input {...register('nome')} />
            </FormControl>
          </ModalBody>
          <ModalFooter gap={5} pt={10}>
            <Button colorScheme="gray" onClick={onClose}>
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
        </ModalContent>
      </Modal>
    </>
  );
}
