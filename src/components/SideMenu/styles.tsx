import styled from '@emotion/styled';
import { List, ListIcon, ListItem, Link } from '@chakra-ui/react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Menu = styled(List)`
  gap: 5px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const MenuTitle = styled.h3`
  text-transform: uppercase;
  padding: 15px 30px 10px;
  transition: opacity 0.2s linear;

  &.hidden {
    opacity: 0;
  }
`;

export const MenuItem = styled(ListItem)`
  display: flex;
`;

export const MenuLink = styled(Link)`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 10px;

  &:hover {
    text-decoration: none;
    background: rgba(255, 255, 255, 0.2);
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
