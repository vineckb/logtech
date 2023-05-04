import { ReactComponent as Logo } from '@/assets/logo-white.svg';
import { Wrapper } from './styles';

interface Props {
  collapsed: boolean;
}

export function CollapsibleLogo({ collapsed }: Props) {
  return (
    <Wrapper className={collapsed ? 'collapsed' : ''}>
      <Logo />
    </Wrapper>
  );
}
