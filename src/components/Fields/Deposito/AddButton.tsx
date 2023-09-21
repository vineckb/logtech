import { IconButton, useDisclosure } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { AddModal } from "./AddModal";

export function AddButton() {
  const { isOpen, getButtonProps, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Adicionar Depósito"
        variant="outline"
        colorScheme="facebook"
        rounded="full"
        ml={3}
        mb="-3px"
        size="xs"
        {...getButtonProps()}
      >
        <MdAdd />
      </IconButton>
      <AddModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
