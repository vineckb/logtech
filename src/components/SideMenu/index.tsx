import { Menu, MenuTitle, Wrapper } from './styles';
import { SideMenuItem } from '../SideMenuItem';
import { useSideNav } from '@/hooks/useSideNav';
import { menuItems } from './items';

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
