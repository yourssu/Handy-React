import { Dispatch, SetStateAction } from 'react';

type ChipGroupProps<D extends React.ReactNode> = {
  children: React.ReactNode;
  drag?: boolean;
  dragItems?: D[];
  dragItemSetter?: Dispatch<SetStateAction<D[]>>;
};

export type { ChipGroupProps };
