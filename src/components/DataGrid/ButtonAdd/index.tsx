import { PrimaryButton } from '@/components/PrimaryButton';
import { Icon } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons/lib';
import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface Props {
  icon?: IconType;
}

export function ButtonAdd({ children, icon }: PropsWithChildren<Props>) {
  const navigate = useNavigate();

  function onClick() {
    navigate('novo');
  }
  return (
    <PrimaryButton onClick={onClick}>
      <Icon as={icon || MdAdd} fontSize={18} style={{ marginRight: '5px' }} />
      {children || 'Adicionar'}
    </PrimaryButton>
  );
}
