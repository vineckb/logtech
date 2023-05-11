import { PrimaryButton } from '@/components/PrimaryButton';
import { Icon } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons/lib';
import { MdAdd } from 'react-icons/md';

interface Props {
  onClick: () => void;
  icon?: IconType;
}

export function ButtonAdd({
  children,
  onClick,
  icon,
}: PropsWithChildren<Props>) {
  return (
    <PrimaryButton onClick={onClick}>
      <Icon as={icon || MdAdd} fontSize={18} style={{ marginRight: '5px' }} />
      {children || 'Adicionar'}
    </PrimaryButton>
  );
}
