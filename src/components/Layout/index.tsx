import React from 'react';
import { AppBar } from '@/components/AppBar';
import { SideNav } from '@/components/SideNav';
import { Outlet } from 'react-router-dom';
import { PageContainer, Wrapper } from './styles';
import { SideNavProvider } from '@/providers/SideNav';

export function Layout() {
  return (
    <SideNavProvider>
      <Wrapper>
        <SideNav />
        <PageContainer>
          <AppBar />
          <Outlet />
        </PageContainer>
      </Wrapper>
    </SideNavProvider>
  );
}
