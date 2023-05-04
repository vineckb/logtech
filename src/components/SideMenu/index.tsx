import { Link as ReachLink } from 'react-router-dom';
import { MdSettings } from 'react-icons/md';
import {
  LinkText,
  Menu,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuTitle,
  Wrapper,
} from './styles';

interface Props {
  open: boolean;
}

export function SideMenu({ open }: Props) {
  return (
    <Wrapper>
      <MenuTitle className={open ? '' : 'hidden'}>Menu</MenuTitle>

      <Menu>
        <MenuItem>
          <MenuLink as={ReachLink} to="/settings">
            <MenuIcon as={MdSettings} fontSize={30} />
            <LinkText className={open ? '' : 'collapsed'}>
              <span>Configuração da Aplicação</span>
            </LinkText>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as={ReachLink} to="/">
            <MenuIcon as={MdSettings} fontSize={30} />
            <LinkText className={open ? '' : 'collapsed'}>
              <span>Painel de Controle</span>
            </LinkText>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as={ReachLink} to="/entradas">
            <MenuIcon as={MdSettings} fontSize={30} />
            <LinkText className={open ? '' : 'collapsed'}>
              <span>Entradas</span>
            </LinkText>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as={ReachLink} to="/expedicoes">
            <MenuIcon as={MdSettings} fontSize={30} />
            <LinkText className={open ? '' : 'collapsed'}>
              <span>Expedições</span>
            </LinkText>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as={ReachLink} to="/gestao">
            <MenuIcon as={MdSettings} fontSize={30} />
            <LinkText className={open ? '' : 'collapsed'}>
              <span>Gestão</span>
            </LinkText>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as={ReachLink} to="/auditoria">
            <MenuIcon as={MdSettings} fontSize={30} />
            <LinkText className={open ? '' : 'collapsed'}>
              <span>Auditoria</span>
            </LinkText>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as={ReachLink} to="/cadastro">
            <MenuIcon as={MdSettings} fontSize={30} />
            <LinkText className={open ? '' : 'collapsed'}>
              <span>Cadastro</span>
            </LinkText>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as={ReachLink} to="/consulta">
            <MenuIcon as={MdSettings} fontSize={30} />
            <LinkText className={open ? '' : 'collapsed'}>
              <span>Consulta</span>
            </LinkText>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as={ReachLink} to="/recepcao">
            <MenuIcon as={MdSettings} fontSize={30} />
            <LinkText className={open ? '' : 'collapsed'}>
              <span>Recepção</span>
            </LinkText>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as={ReachLink} to="/auditoria">
            <MenuIcon as={MdSettings} fontSize={30} />
            <LinkText className={open ? '' : 'collapsed'}>
              <span>Auditoria</span>
            </LinkText>
          </MenuLink>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
}
