export type DeviceType = 'mobile' | 'web';

export interface DotPaginationProps extends React.HTMLAttributes<HTMLInputElement> {
  totalPage: number;
  size?: DeviceType;
  setPage: (page: number) => void;
}
