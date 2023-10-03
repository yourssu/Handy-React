export type CheckBoxSize = 'small' | 'medium' | 'large';

export interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: CheckBoxSize;
  isSelected?: HTMLInputElement['checked'];
  isDisabled?: HTMLInputElement['disabled'];
  children?: React.ReactNode;
}
