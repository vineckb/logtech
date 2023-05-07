import { Link as ReachLink, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons/lib';
import { useSideNav } from '@/hooks/useSideNav';
import { SideSubMenu } from '@/components/SideSubMenu';
import { LinkText, MenuIcon, MenuItem, MenuLink } from './styles';

export type MenuItemProps = {
  title: string;
  to: string;
  icon: IconType;
  childrens?: Array<{
    title: string;
    to: string;
  }>;
};

export function SideMenuItem({ title, to, icon, childrens }: MenuItemProps) {
  const { open } = useSideNav();
  const { pathname } = useLocation();

  const active = pathname.includes(to);

  return (
    <>
      <MenuItem className={active ? 'active' : ''}>
        <MenuLink as={ReachLink} to={to}>
          <MenuIcon as={icon} fontSize={30} />
          <LinkText className={open ? '' : 'collapsed'}>
            <span>{title}</span>
          </LinkText>
        </MenuLink>
        {childrens && <SideSubMenu open={active} items={childrens} />}
      </MenuItem>
    </>
  );
}
