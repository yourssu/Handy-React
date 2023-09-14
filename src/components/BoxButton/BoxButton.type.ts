import { YDSTheme } from '@/style';

export type size = 'small' | 'medium' | 'large' | 'extraLarge';
export type rounding = 4 | 8;
export type isDisabled = boolean;
export type isWarned = boolean;
export type types = 'filled' | 'tinted' | 'line';
export type theme = YDSTheme;

export type BoxButtonProps = {
  size: size;
  rounding: rounding;
  isDisabled: isDisabled;
  isWarned: isWarned;
  types: types;
  theme: theme;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
