import { useSideNav } from '@/hooks/useSideNav';
import MenuIcon from 'hamburger-react';
import { SideMenuItem } from '../SideMenuItem';
import { Menu, MenuTitle, Wrapper } from './styles';

// modules
import AuditoriaModule from '@/modules/Auditoria';
import ConfiguracaoModule from '@/modules/Configuracao';
import EntradasModule from '@/modules/Entradas';
import ExpedicoesModule from '@/modules/Expedicoes';
import GestaoModule from '@/modules/Gestao';
import MovimentacoesModule from '@/modules/Movimentacoes';
import PainelModule from '@/modules/Painel';

const menuItems = [
  ConfiguracaoModule.menuItem,
  PainelModule.menuItem,
  EntradasModule.menuItem,
  MovimentacoesModule.menuItem,
  ExpedicoesModule.menuItem,
  GestaoModule.menuItem,
  AuditoriaModule.menuItem,
];

export function SideMenu() {
  const { open, buttonProps } = useSideNav();
  return (
    <Wrapper>
      <MenuTitle className={open ? '' : 'hidden'} {...buttonProps}>
        <span>Menu</span>

        <button>
          <MenuIcon toggled={open} size={20} />
        </button>
      </MenuTitle>

      <Menu>
        {menuItems.map((item, index) => (
          <SideMenuItem key={index} {...item} />
        ))}
      </Menu>
    </Wrapper>
  );
}
