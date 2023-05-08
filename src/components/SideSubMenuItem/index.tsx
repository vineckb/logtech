import { SubMenuItem } from './styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface Props {
  to: string;
  title: string;
}

export function SideSubMenuItem({ to, title }: Props) {
  const { pathname } = useLocation();
  const active = pathname.includes(to);

  return (
    <SubMenuItem as={RouterLink} to={to} className={active ? 'active' : ''}>
      {title}
    </SubMenuItem>
  );
}
