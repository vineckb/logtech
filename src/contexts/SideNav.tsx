import { createContext } from 'react';

interface SideNavContextType {
  open: boolean;
  buttonProps: object;
}

export const SideNavContext = createContext<SideNavContextType>(
  {} as SideNavContextType
);
