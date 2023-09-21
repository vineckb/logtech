import { queryClient } from "@/App";
import { api } from "@/services/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import React from "react";

export interface FetchListQueryParams {
  page: number;
  totalCount: number;
  perPage: number;
  search: string;
}

export function useGenericFetchList<T>(
  resourceKey: string,
  params: FetchListQueryParams
) {
  return useQuery({
    queryKey: [`${resourceKey}-list`, params],
    queryFn: (): Promise<AxiosResponse<T>> =>
      api.get(`/${resourceKey}`, {
        data: params,
      }),
  });
}
export function useGenericFetchItem<Input, Output = Input>({
  resourceKey,
  transform,
  id,
}: {
  resourceKey: string;
  transform?: (data: Input) => Output;
  id: number | string;
}) {
  return useQuery({
    cacheTime: 0,
    queryKey: [`${resourceKey}-item`, id],
    queryFn: (): Promise<AxiosResponse<Input>> =>
      api.get(`/${resourceKey}/${id}`),

    select: React.useCallback(
      (data: AxiosResponse<Input>): Output => {
        if (!transform) return (data.data || {}) as Output;

        return transform(data.data);
      },
      [transform]
    ),
  });
}

export function useGenericSave<Input, Output>({
  resourceKey,
  id,
  transform,
}: {
  resourceKey: string;
  id?: number | string | null;
  transform: (data: Input) => Output;
}) {
  const mutation = useMutation({
    mutationKey: [`${resourceKey}-save`],
    mutationFn: (values: Input) => {
      const body = typeof transform === "function" ? transform(values) : values;

      return id
        ? api.put(`/${resourceKey}/${id}`, body)
        : api.post(`/${resourceKey}`, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        `${resourceKey}-list`,
        `${resourceKey}-item`,
      ]);
    },
  });

  return mutation;
}

export function useGenericRemove(resourceKey: string) {
  return useMutation({
    mutationKey: [`${resourceKey}-remove`],
    mutationFn: (id: string | number): Promise<AxiosResponse> =>
      api.delete(`/${resourceKey}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries([
        `${resourceKey}-list`,
        `${resourceKey}-item`,
      ]);
    },
  });
}
