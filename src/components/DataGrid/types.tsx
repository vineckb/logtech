export interface ResponseType<T> {
  data: {
    content: T[];
    totalElements: number;
    pageSize: number;
    pageNumber: number;
  };
}
