import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import { MdOutlineList } from 'react-icons/md';
import { IconType } from 'react-icons/lib';
import { SubMenuItem } from './styles';

interface Props {
  to: string;
  title: string;
  icon?: IconType;
}

export function SideSubMenuItem({ to, title, icon = MdOutlineList }: Props) {
  const { pathname } = useLocation();
  const active = pathname.includes(to);

  return (
    <SubMenuItem as={RouterLink} to={to} className={active ? 'active' : ''}>
      <Icon as={icon} fontSize={20} mr={2} />
      {title}
    </SubMenuItem>
  );
}
