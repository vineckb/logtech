import { createContext, useContext } from 'react';

interface OverviewModalContextType {
  handleClose: () => void;
}

export const OverviewModalContext = createContext<OverviewModalContextType>(
  {} as OverviewModalContextType
);

export function useOverviewContext() {
  const context = useContext(OverviewModalContext);

  return context;
}
