interface Pagination<T> {
  page: number;
  pageSize: number;
  total: number;
  data: T[];
}
