import styled from '@emotion/styled';
import { Link } from '@chakra-ui/react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 50px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-out;

  &.open {
    max-height: 500px;
    transition: max-height 0.6s ease-in;
  }
`;

export const SubMenuItem = styled(Link)`
  transition: color 0.3s linear;
  display: flex;

  &:hover {
    color: #ede5e5;
    text-decoration: none;
  }

  &::last-child {
    margin-bottom: 10px;
  }
`;
