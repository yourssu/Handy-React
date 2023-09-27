export type BoxButtonSize = 'small' | 'medium' | 'large' | 'extraLarge';
export type BoxButtonRounding = 4 | 8;
export type BoxButtonVariant = 'filled' | 'tinted' | 'line';

export interface BoxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: BoxButtonSize;
  rounding: BoxButtonRounding;
  isDisabled: HTMLButtonElement['disabled'];
  isWarned: boolean;
  variant: BoxButtonVariant;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: string | number;
}
