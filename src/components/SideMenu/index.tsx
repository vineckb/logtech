import { Menu, MenuTitle, Wrapper } from './styles';
import { SideMenuItem } from '../SideMenuItem';
import { useSideNav } from '@/hooks/useSideNav';

// modules
import ConfiguracaoModule from '@/modules/Configuracao';
import PainelModule from '@/modules/Painel';
import EntradasModule from '@/modules/Entradas';
import MovimentacoesModule from '@/modules/Movimentacoes';
import ExpedicoesModule from '@/modules/Expedicoes';
import GestaoModule from '@/modules/Gestao';
import AuditoriaModule from '@/modules/Auditoria';

const menuItems = [
  ConfiguracaoModule.navigation,
  PainelModule.menuItem,
  EntradasModule.menuItem,
  MovimentacoesModule.menuItem,
  ExpedicoesModule.menuItem,
  GestaoModule.menuItem,
  AuditoriaModule.menuItem,
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
