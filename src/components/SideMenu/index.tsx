import { Menu, MenuTitle, Wrapper } from './styles';
import { MenuItemProps, SideMenuItem } from '../SideMenuItem';
import { MdSettings } from 'react-icons/md';
import { useSideNav } from '@/hooks/useSideNav';

const childrens = [
  {
    to: '/configuracao/definicao-de-licencas',
    title: 'Definição de Licenças',
  },
  {
    to: '/configuracao/conexao-cliente',
    title: 'Conexão Cliente',
  },
  {
    to: '/configuracao/liberacao-de-rotinas',
    title: 'Liberação de rotinas',
  },
  {
    to: '/configuracao/permissao-de-usuarios',
    title: 'Permissão de Usuários',
  },
  {
    to: '/configuracao/permissao-de-filiais',
    title: 'Permissão de Filiais',
  },
];

const menuItems: MenuItemProps[] = [
  {
    to: '/configuracao',
    title: 'Configuração da Aplicação',
    icon: MdSettings,
    childrens,
  },
  {
    to: '/dashboard',
    title: 'Painel de Controle',
    icon: MdSettings,
    childrens,
  },
  {
    to: '/entradas',
    title: 'Entradas',
    icon: MdSettings,
    childrens,
  },
  {
    to: '/expedicoes',
    title: 'Expedições',
    icon: MdSettings,
    childrens,
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
    childrens,
  },
  {
    to: '/cadastro',
    title: 'Cadastro',
    icon: MdSettings,
    childrens,
  },
  {
    to: '/consulta',
    title: 'Consulta',
    icon: MdSettings,
    childrens,
  },
  {
    to: '/recepcao',
    title: 'Recepção',
    icon: MdSettings,
    childrens,
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
