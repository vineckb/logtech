import MenuIcon from 'hamburger-react';
import { Wrapper } from './styles';
import { useSideNav } from '@/hooks/useSideNav';

export function AppBar() {
  const { open, buttonProps } = useSideNav();

  return (
    <Wrapper>
      <button {...buttonProps}>
        <MenuIcon toggled={open} />
      </button>
    </Wrapper>
  );
}
