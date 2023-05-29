import { List } from '@chakra-ui/react';
import styled from '@emotion/styled';

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
  padding: 15px 18px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    transition: opacity 0.2s linear;
    width: auto;
    padding-left: 12px;
  }

  &.hidden span {
    display: none;
  }
`;
