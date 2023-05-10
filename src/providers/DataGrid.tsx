import { useState } from 'react';
import { DataGridContext } from '@/contexts/DataGrid';
import { ReactElement } from 'react';

interface DataGridProviderProps {
  children?: ReactElement;
}

export function DataGridProvider({ children }: DataGridProviderProps) {
  const [selecteds, setSelecteds] = useState<string[]>([]);

  const context = { selecteds, setSelecteds };
  return (
    <DataGridContext.Provider value={context}>
      {children}
    </DataGridContext.Provider>
  );
}
