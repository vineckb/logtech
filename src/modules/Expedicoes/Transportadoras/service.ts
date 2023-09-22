import {
  FetchListQueryParams,
  useGenericFetchItem,
  useGenericFetchList,
  useGenericRemove,
} from "@/hooks/useQuery";
import { Resource } from "./model";
import { resourceKey } from "./settings";

export function useRemove() {
  return useGenericRemove(resourceKey);
}

export function useFetchList(params: FetchListQueryParams) {
  return useGenericFetchList<Resource>(resourceKey, params);
}

export function useFetchItem(id: string) {
  return useGenericFetchItem<Resource>({
    resourceKey,
    id,
  });
}

// export function useFetchItem(id: string) {
//   return useQuery({
//     queryKey: [`${resourceKey}-list`, id],
//     queryFn: (): Promise<AxiosResponse<{ content: Resource[] }>> =>
//       api.get(`/${resourceKey}?search=idtransportadora:${id}`),
//     select: (data) => data?.data.content[0],
//   });
// }
