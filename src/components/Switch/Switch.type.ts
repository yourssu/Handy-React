export type SwitchSize = 'small' | 'medium' | 'large';

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  isDisabled?: boolean;
  isSelected?: boolean;
  size: SwitchSize;
  onSelectedChange?: (selected: boolean) => void;
}
