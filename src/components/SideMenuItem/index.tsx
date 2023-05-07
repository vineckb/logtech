import { Link as ReachLink } from 'react-router-dom';
import { LinkText, MenuIcon, MenuItem, MenuLink } from './styles';
import { IconType } from 'react-icons/lib';
import { useSideNav } from '@/hooks/useSideNav';

export type MenuItemProps = {
  title: string;
  to: string;
  icon: IconType;
};

export function SideMenuItem({ title, to, icon }: MenuItemProps) {
  const { open } = useSideNav();

  return (
    <MenuItem>
      <MenuLink as={ReachLink} to={to}>
        <MenuIcon as={icon} fontSize={30} />
        <LinkText className={open ? '' : 'collapsed'}>
          <span>{title}</span>
        </LinkText>
      </MenuLink>
    </MenuItem>
  );
}
