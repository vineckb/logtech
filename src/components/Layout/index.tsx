import React from 'react';
import { AppBar } from '@/components/AppBar';
import { SideNav } from '@/components/SideNav';
import { Outlet } from 'react-router-dom';
import { PageContainer, Wrapper } from './styles';
import { SideNavProvider } from '@/providers/SideNav';
import { useSideNav } from '@/hooks/useSideNav';

export function Layout() {
  return (
    <SideNavProvider>
      <Wrapper>
        <SideNav />
        <Page />
      </Wrapper>
    </SideNavProvider>
  );
}

function Page() {
  const { open } = useSideNav();
  return (
    <PageContainer animate={{ maxWidth: `calc(100% - ${open ? 250 : 87}px)` }}>
      <AppBar />
      <Outlet />
    </PageContainer>
  );
}
