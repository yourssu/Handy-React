export type PlainButtonSize = 'small' | 'medium' | 'large';

export interface PlainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: PlainButtonSize;
  isPointed: boolean;
  isWarned: boolean;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
