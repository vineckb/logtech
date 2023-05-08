import { SideSubMenuItem } from '../SideSubMenuItem';
import { Wrapper } from './styles';

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
      {items.map((item, index) => (
        <SideSubMenuItem {...item} key={index} />
      ))}
    </Wrapper>
  );
}
