import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../../assets/logo-white.svg';

const Wrapper = styled.div`
  margin: 15px 20px;
  width: 177px;
  transition: width 0.2s linear;
  overflow: hidden;

  & svg {
    width: auto;
    height: 48px;
  }

  &.collapsed {
    width: 46px;
  }
`;

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
