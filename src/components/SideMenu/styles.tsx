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
