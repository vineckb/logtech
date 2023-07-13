import { PeriodContext } from '@/contexts/Period';
import { useContext } from 'react';

export function usePeriodContext() {
  const context = useContext(PeriodContext);
  return context;
}
