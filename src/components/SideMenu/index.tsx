import { Menu, MenuTitle, Wrapper } from './styles';
import { MenuItemProps, SideMenuItem } from '../SideMenuItem';
import { MdSettings } from 'react-icons/md';
import { useSideNav } from '@/hooks/useSideNav';

interface Props {
  open: boolean;
}

const menuItems: MenuItemProps[] = [
  {
    to: '/settings',
    title: 'Configuração da Aplicação',
    icon: MdSettings,
  },
  {
    to: '/dashboard',
    title: 'Painel de Controle',
    icon: MdSettings,
  },
  {
    to: '/entradas',
    title: 'Entradas',
    icon: MdSettings,
  },
  {
    to: '/expedicoes',
    title: 'Expedições',
    icon: MdSettings,
  },
  {
    to: '/gestao',
    title: 'Gestão',
    icon: MdSettings,
  },
  {
    to: '/auditoria',
    title: 'Auditoria',
    icon: MdSettings,
  },
  {
    to: '/cadastro',
    title: 'Cadastro',
    icon: MdSettings,
  },
  {
    to: '/consulta',
    title: 'Consulta',
    icon: MdSettings,
  },
  {
    to: '/recepcao',
    title: 'Recepção',
    icon: MdSettings,
  },
];

export function SideMenu() {
  const { open } = useSideNav();
  return (
    <Wrapper>
      <MenuTitle className={open ? '' : 'hidden'}>Menu</MenuTitle>

      <Menu>
        {menuItems.map((item, index) => (
          <SideMenuItem key={index} {...item} />
        ))}
      </Menu>
    </Wrapper>
  );
}
