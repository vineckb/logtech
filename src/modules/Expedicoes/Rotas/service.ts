import { Resource } from './model';
import {
  FetchListQueryParams,
  useGenericFetchList,
  useGenericRemove,
} from '@/hooks/useQuery';
import { resourceName } from './settings';

export function useRemove() {
  return useGenericRemove(resourceName);
}

export function useFetchList(params: FetchListQueryParams) {
  return useGenericFetchList<Resource>(resourceName, params);
}
