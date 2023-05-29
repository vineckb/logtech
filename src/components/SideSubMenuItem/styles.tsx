import { Link } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SubMenuItem = styled(Link)`
  transition: color 0.3s linear;
  display: flex;
  white-space: nowrap;
  align-items: center;

  &:hover,
  &.active {
    color: #ede5e5;
    text-decoration: none;
  }

  &::last-child {
    margin-bottom: 10px;
  }
`;
