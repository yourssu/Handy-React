import { SemanticItemBGColor } from '@/style';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 배경 색상 */
  color?: SemanticItemBGColor;
  /** Badge 안에 들어갈 텍스트 */
  children?: React.ReactNode;
  /** 텍스트 왼쪽에 들어갈 아이콘 */
  leftIcon?: React.ReactNode;
}
