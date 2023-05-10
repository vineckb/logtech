import { UseQueryResult } from '@tanstack/react-query';
import { createContext } from 'react';

interface DataGridContextType {
  selecteds: string[];
  page: number;
  totalCount: number;
  perPage: number;

  queryResult: UseQueryResult;

  setSelecteds: (selecteds: string[]) => void;
  setPage: (page: number) => void;
  setTotalCount: (page: number) => void;
  setPerPage: (page: number) => void;
}

export const DataGridContext = createContext<DataGridContextType>(
  {} as DataGridContextType
);
