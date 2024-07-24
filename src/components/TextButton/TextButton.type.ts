export type TextButtonSize = 'medium' | 'small' | 'xsmall';
export type TextButtonHierarchy = 'primary' | 'secondary';

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: TextButtonSize;
  hierarchy: TextButtonHierarchy;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: string;
}
