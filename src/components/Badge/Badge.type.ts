import { SemanticBGColor } from '@/style';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: SemanticBGColor;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
}
