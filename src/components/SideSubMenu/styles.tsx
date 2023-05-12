import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 35px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-out;

  &.open {
    max-height: 500px;
    transition: max-height 0.6s ease-in;
  }
`;
