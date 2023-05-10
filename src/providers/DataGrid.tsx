import { useState } from 'react';
import { DataGridContext } from '@/contexts/DataGrid';
import { ReactElement } from 'react';
import { AxiosResponse } from 'axios';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export interface QueryParams {
  page: number;
  totalCount: number;
  perPage: number;
}

interface DataGridProviderProps {
  children?: ReactElement;
  query: (params: QueryParams) => Promise<AxiosResponse>;
}

interface ResponseType {
  content: [any];
  totalPages: number;
  pageSize: number;
  pageNumber: number;
}

export function DataGridProvider({ children, query }: DataGridProviderProps) {
  const [selecteds, setSelecteds] = useState<string[]>([]);
  const [page, setPage] = useState<number>(2);
  const [totalCount, setTotalCount] = useState<number>(90);
  const [perPage, setPerPage] = useState<number>(10);

  const queryResult: UseQueryResult<ResponseType> = useQuery({
    queryKey: ['test'],
    queryFn: (): Promise<AxiosResponse<ResponseType>> =>
      query({ page, totalCount, perPage }),
  });

  const context = {
    queryResult,
    selecteds,
    page,
    totalCount,
    perPage,
    setSelecteds,
    setPage,
    setTotalCount,
    setPerPage,
  };
  return (
    <DataGridContext.Provider value={context}>
      {children}
    </DataGridContext.Provider>
  );
}
