export type SwitchSize = 'small' | 'medium' | 'large';

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  isDisabled?: boolean;
  defaultSelected?: boolean;
  size: SwitchSize;
  onSelectedChange?: (selected: boolean) => void;
}
