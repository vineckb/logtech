import { Resource } from './model';
import {
  FetchListQueryParams,
  useGenericFetchList,
  useGenericRemove,
} from '@/hooks/useQuery';
import { resourceKey } from './settings';

export function useRemove() {
  return useGenericRemove(resourceKey);
}

export function useFetchList(params: FetchListQueryParams) {
  return useGenericFetchList<Resource>(resourceKey, params);
}
