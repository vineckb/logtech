import { SubMenuItem, Wrapper } from './styles';
import { Link as RouterLink } from 'react-router-dom';

interface Prop {
  items: Array<{
    title: string;
    to: string;
  }>;
  open: boolean;
}

export function SideSubMenu({ items, open }: Prop) {
  if (!items.length) return null;

  return (
    <Wrapper className={open ? 'open' : ''}>
      {items.map(({ to, title }) => (
        <SubMenuItem as={RouterLink} to={to}>
          {title}
        </SubMenuItem>
      ))}
    </Wrapper>
  );
}
