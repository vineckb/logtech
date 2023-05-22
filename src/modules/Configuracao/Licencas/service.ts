import React from 'react';
import {
  LicencaFormValues,
  LicencaResource,
  formValuesToResource,
  resourceToFormValues,
} from './model';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '@/App';
import { api } from '@/services/api';
import { AxiosResponse } from 'axios';

export function useSave(id?: number | string | null) {
  const mutation = useMutation({
    mutationKey: ['conexao-edit'],
    mutationFn: (values: LicencaFormValues) => {
      const body = formValuesToResource(values);

      return id
        ? api.put(`/conexaocliente/${id}`, body)
        : api.post('/conexaocliente', body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['licenca', 'licenca-item']);
    },
  });

  return mutation;
}

export function useFetchItem(id: number | string) {
  return useQuery({
    queryKey: ['licenca-item'],
    queryFn: (): Promise<AxiosResponse<LicencaResource>> =>
      api.get(`/licenca/${id}`),
    select: React.useCallback(
      (data: AxiosResponse<LicencaResource>): LicencaFormValues =>
        (data.data ? resourceToFormValues(data.data) : {}) as LicencaFormValues,
      []
    ),
  });
}
