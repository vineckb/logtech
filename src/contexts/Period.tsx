import { createContext } from 'react';

interface PeriodContextType {
  period: [string, string];
  setPeriod: (period: [string, string]) => void;
}

export const PeriodContext = createContext<PeriodContextType>(
  {} as PeriodContextType
);
