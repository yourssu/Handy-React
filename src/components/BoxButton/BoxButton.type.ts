export type BoxButtonSize = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
export type BoxButtonHierarchy = 'primary' | 'secondary' | 'tertiary';

export interface BoxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: BoxButtonSize;
  hierarchy: BoxButtonHierarchy;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: string;
}
