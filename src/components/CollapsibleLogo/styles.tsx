import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 15px 20px;
  width: 177px;
  transition: width 0.2s linear;
  overflow: hidden;
  min-height: 48px;

  & svg {
    width: auto;
    height: 48px;
  }

  &.collapsed {
    width: 46px;
  }
`;
