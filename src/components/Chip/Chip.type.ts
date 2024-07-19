type ChipRoleType = 'suggestion' | 'input' | 'filter';

type ChipIconProps = {
  children: React.ReactNode;
  position?: 'left' | 'right';
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

type ChipIconRemoveProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

type ChipContentProps = {
  children: React.ReactNode;
};

type ChipProps = {
  role: ChipRoleType;
  selected?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};

export type { ChipProps, ChipIconProps, ChipContentProps, ChipIconRemoveProps };
