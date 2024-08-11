export interface PaginationProps {
  totalPage: number;
  initialPage?: number;
  setPage: (page: number) => void;
}
