export type BoxButtonSize = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
export type BoxButtonVariant = 'filledPrimary' | 'filledSecondary' | 'outlined';

export interface BoxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: BoxButtonSize;
  variant: BoxButtonVariant;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: string;
}
