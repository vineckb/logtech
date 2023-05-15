import { createContext, useContext } from 'react';

interface OverviewModalContextType {}

export const OverviewModalContext = createContext<OverviewModalContextType>(
  {} as OverviewModalContextType
);

export function useOverviewModalContext() {
  const context = useContext(OverviewModalContext);

  return context;
}
