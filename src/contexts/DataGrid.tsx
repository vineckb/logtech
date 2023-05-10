import { createContext } from 'react';

interface DataGridContextType {
  selecteds: string[];
  setSelecteds: (selecteds: string[]) => void;
}

export const DataGridContext = createContext<DataGridContextType>(
  {} as DataGridContextType
);
