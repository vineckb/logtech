import {
  FormValues,
  Resource,
  formValuesToResource,
  resourceToFormValues,
} from './model';
import {
  FetchListQueryParams,
  useGenericFetchItem,
  useGenericFetchList,
  useGenericRemove,
  useGenericSave,
} from '@/hooks/useQuery';
import { resourceKey } from './settings';

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
  return useGenericFetchList<Resource>(resourceKey, params);
}

export function useFetchItem(id: number | string) {
  return useGenericFetchItem<Resource, FormValues>({
    resourceKey,
    id,
    transform: resourceToFormValues,
  });
}
