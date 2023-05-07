import { SideNavContext } from '@/contexts/SideNav';
import { useContext } from 'react';

export function useSideNav() {
  const context = useContext(SideNavContext);
  return context;
}
