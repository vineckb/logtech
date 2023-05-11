export interface ResponseType<T = any> {
  data: {
    content: T[];
    totalElements: number;
    pageSize: number;
    pageNumber: number;
  };
}
