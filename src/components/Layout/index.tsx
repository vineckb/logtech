import React from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import { AppBar } from '@/components/AppBar';
import { SideNav } from '@/components/SideNav';
import { Outlet } from 'react-router-dom';
import { PageContainer, Wrapper } from './styles';

export function Layout() {
  const { getButtonProps, isOpen: open } = useDisclosure({
    defaultIsOpen: true,
  });

  return (
    <Wrapper>
      <SideNav open={open} />
      <PageContainer>
        <AppBar open={open} buttonProps={getButtonProps()} />
        <Outlet />
      </PageContainer>
    </Wrapper>
  );
}
