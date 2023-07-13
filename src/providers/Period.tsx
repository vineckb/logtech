import { PeriodContext } from '@/contexts/Period';
import React from 'react';

export function PeriodProvider({ children }: React.PropsWithChildren) {
  const [period, setPeriod] = React.useState<[string, string]>([
    '01/06/2023',
    '30/06/2023',
  ]);

  const context = {
    period,
    setPeriod,
  };

  return (
    <PeriodContext.Provider value={context}>{children}</PeriodContext.Provider>
  );
}
