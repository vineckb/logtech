import styled from '@emotion/styled';
import { ListIcon, ListItem, Link } from '@chakra-ui/react';

export const MenuItem = styled(ListItem)`
  display: flex;
`;

export const MenuLink = styled(Link)`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 10px;
  transition: color 0.2s linear;

  &:hover,
  &.active {
    text-decoration: none;
    color: #ede5e5;
  }
`;

export const MenuIcon = styled(ListIcon)`
  margin: 0 10px 0 20px;
`;

export const LinkText = styled('div')`
  width: 122px;
  transition: width 0.2s linear;
  width: 122px;
  overflow: hidden;

  &.collapsed {
    width: 0;
  }

  span {
    white-space: break-spaces;
    width: 122px;
    display: block;
  }
`;
