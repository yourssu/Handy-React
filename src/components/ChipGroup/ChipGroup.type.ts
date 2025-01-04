import { ChipRefPayloadType, ChipRoleType } from '@/components/Chip/Chip.type';

type ChipGroupRefPayloadType = {
  element: HTMLDivElement | null;
  chipRefs: React.MutableRefObject<ChipRefPayloadType[]>;
  clearAllSelected: () => void;
};

type ChipGroupProps = {
  children: React.ReactNode;
  role: ChipRoleType;
  swipable?: boolean;
  onSelectedChange?: (selectedChipElements: HTMLDivElement[]) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export type { ChipGroupProps, ChipGroupRefPayloadType };
