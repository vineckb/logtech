import { NotImplementedModal } from '@/components/NotImplementedModal';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Icon, useDisclosure } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons/lib';
import { MdAdd } from 'react-icons/md';

interface Props {
  onClick: () => void;
  icon?: IconType;
}

export function ButtonAdd({ children, icon }: PropsWithChildren<Props>) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PrimaryButton onClick={onOpen}>
        <Icon as={icon || MdAdd} fontSize={18} style={{ marginRight: '5px' }} />
        {children || 'Adicionar'}
      </PrimaryButton>
      <NotImplementedModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
