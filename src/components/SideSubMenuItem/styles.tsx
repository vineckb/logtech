import styled from '@emotion/styled';
import { Link } from '@chakra-ui/react';

export const SubMenuItem = styled(Link)`
  transition: color 0.3s linear;
  display: flex;
  white-space: break-spaces;

  &:hover,
  &.active {
    color: #ede5e5;
    text-decoration: none;
  }

  &::last-child {
    margin-bottom: 10px;
  }
`;
