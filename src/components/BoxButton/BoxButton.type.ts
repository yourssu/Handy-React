export type BoxButtonSize = 'small' | 'medium' | 'large' | 'extraLarge';
export type BoxButtonRounding = 4 | 8;
export type BoxButtonType = 'filled' | 'tinted' | 'line';

export interface BoxButtonProps {
  size: BoxButtonSize;
  rounding: BoxButtonRounding;
  isDisabled: HTMLButtonElement['disabled'];
  isWarned: boolean;
  type: BoxButtonType;
  leftIcon: React.ReactNode;
  children: React.ReactNode;
  rightIcon: React.ReactNode;
}
