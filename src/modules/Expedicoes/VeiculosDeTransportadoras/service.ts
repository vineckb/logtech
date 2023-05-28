import {
  FetchListQueryParams,
  useGenericFetchItem,
  useGenericFetchList,
  useGenericRemove,
} from '@/hooks/useQuery';
import { Resource } from './model';
import { resourceKey } from './settings';

export function useRemove() {
  return useGenericRemove(resourceKey);
}

export function useFetchList(params: FetchListQueryParams) {
  return useGenericFetchList<Resource>(resourceKey, params);
}

export function useFetchItem(id: string | number) {
  return useGenericFetchItem<Resource>({ resourceKey, id });
}
