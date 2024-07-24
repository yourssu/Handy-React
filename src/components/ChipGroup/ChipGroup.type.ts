// TODO: drag 기능 추가 시 사용할 타입
// import { Dispatch, SetStateAction } from 'react';

// type ChipGroupProps<D extends React.ReactNode> = {
//   children: React.ReactNode;
//   drag?: boolean;
//   dragItems?: D[];
//   dragItemSetter?: Dispatch<SetStateAction<D[]>>;
// };

type ChipGroupProps = {
  children: React.ReactNode;
};

export type { ChipGroupProps };
