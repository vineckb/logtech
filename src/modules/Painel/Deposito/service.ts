import {
  FormValues,
  Resource,
  formValuesToResource,
  resourceToFormValues,
} from "./model";
import {
  FetchListQueryParams,
  useGenericFetchItem,
  useGenericRemove,
  useGenericSave,
} from "@/hooks/useQuery";
import { resourceKey } from "./settings";
import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

export function useRemove() {
  return useGenericRemove(resourceKey);
}

export function useSave(id?: number | string | null) {
  return useGenericSave<FormValues, Resource>({
    resourceKey,
    id,
    transform: formValuesToResource,
  });
}

export function useFetchList(params: FetchListQueryParams) {
  return useQuery({
    queryKey: [`${resourceKey}-list`, params],
    queryFn: (): Promise<AxiosResponse<Resource>> => {
      const { search } = params;

      let url = `/${resourceKey}?`;

      if (search) {
        url += `search=nome:${search}`;
      }

      return api.get(url);
    },
  });
}

export function useFetchItem(id: number | string) {
  return useGenericFetchItem<Resource, FormValues>({
    resourceKey,
    id,
    transform: resourceToFormValues,
  });
}
