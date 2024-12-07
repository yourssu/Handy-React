export type TextButtonSize = 'medium' | 'small' | 'xsmall';
export type TextButtonVariant = 'textPrimary' | 'textSecondary';

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: TextButtonSize;
  variant: TextButtonVariant;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: string;
}
