type ChipSizeType = 'small' | 'medium';
type ChipRoleType = 'suggestion' | 'input' | 'filter';
type ChipIconPositionType = 'left' | 'right';

type ChipIconProps = {
  children: React.ReactNode;
  position?: ChipIconPositionType;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

type ChipIconRemoveProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

type ChipContentProps = {
  children: React.ReactNode;
};

type ChipProps = {
  size: ChipSizeType;
  role: ChipRoleType | 'group'; // Chip 컴포넌트에서만 사용하는 group
  selected?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

type ChipRefPayloadType = {
  id: string;
  element: HTMLDivElement | null;
  setInnerSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

export type {
  ChipRoleType,
  ChipIconPositionType,
  ChipSizeType,
  ChipProps,
  ChipIconProps,
  ChipContentProps,
  ChipIconRemoveProps,
  ChipRefPayloadType,
};
