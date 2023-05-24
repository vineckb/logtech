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
import { resourceName } from './settings';

export function useRemove() {
  return useGenericRemove(resourceName);
}

export function useSave(id?: number | string | null) {
  return useGenericSave<FormValues, Resource>({
    resourceName,
    id,
    transform: formValuesToResource,
  });
}

export function useFetchList(params: FetchListQueryParams) {
  return useGenericFetchList<Resource>(resourceName, params);
}

export function useFetchItem(id: number | string) {
  return useGenericFetchItem<Resource, FormValues>({
    resourceName,
    id,
    transform: resourceToFormValues,
  });
}
