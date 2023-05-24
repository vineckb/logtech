import { queryClient } from '@/App';
import { api } from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import React from 'react';

export interface FetchListQueryParams {
  page: number;
  totalCount: number;
  perPage: number;
  search: string;
}

export function useGenericFetchList<T>(
  resourceName: string,
  params: FetchListQueryParams
) {
  return useQuery({
    queryKey: [`${resourceName}-list`, params],
    queryFn: (): Promise<AxiosResponse<T>> =>
      api.get(`/${resourceName}`, {
        data: params,
      }),
  });
}
export function useGenericFetchItem<Input, Output = unknown>({
  resourceName,
  transform,
  id,
}: {
  resourceName: string;
  transform?: (data: Input) => Output;
  id: number | string;
}) {
  return useQuery({
    queryKey: [`${resourceName}-item`, id],
    queryFn: (): Promise<AxiosResponse<Input>> =>
      api.get(`/${resourceName}/${id}`),

    select: React.useCallback(
      (data: AxiosResponse<Input>) => {
        if (!data.data) return {};

        if (!transform) return data.data;

        return transform(data.data);
      },
      [transform]
    ),
  });
}

export function useGenericSave<Input, Output>({
  resourceName,
  id,
  transform,
}: {
  resourceName: string;
  id?: number | string | null;
  transform: (data: Input) => Output;
}) {
  const mutation = useMutation({
    mutationKey: [`${resourceName}-save`],
    mutationFn: (values: Input) => {
      const body = typeof transform === 'function' ? transform(values) : values;

      return id
        ? api.put(`/${resourceName}/${id}`, body)
        : api.post(`/${resourceName}`, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        `${resourceName}-list`,
        `${resourceName}-item`,
      ]);
    },
  });

  return mutation;
}

export function useGenericRemove(resourceName: string) {
  return useMutation({
    mutationKey: [`${resourceName}-remove`],
    mutationFn: (id: string | number): Promise<AxiosResponse> =>
      api.delete(`/${resourceName}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries([
        `${resourceName}-list`,
        `${resourceName}-item`,
      ]);
    },
  });
}
