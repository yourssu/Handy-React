export interface PaginationProps {
  totalPage: number;
  initialPage?: number;
  onPageChange: (page: number) => void;
}
