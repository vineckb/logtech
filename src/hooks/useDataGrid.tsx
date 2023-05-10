import { DataGridContext } from '@/contexts/DataGrid';
import { useContext } from 'react';

export function useDataGrid() {
  const context = useContext(DataGridContext);
  return context;
}
