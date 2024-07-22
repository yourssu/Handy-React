import { IconProps } from '@/style';

export type TextButtonSize = 'medium' | 'small' | 'xsmall';
export type TextButtonHierarchy = 'primary' | 'secondary';

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** TextButton의 크기를 결정하는 속성 */
  size: TextButtonSize;
  /** TextButton의 모양을 결정하는 속성 */
  hierarchy: TextButtonHierarchy;
  /** TextButton의 왼쪽에 들어갈 아이콘 */
  leftIcon?: React.ReactElement<IconProps>;
  /** TextButton의 내용 */
  children?: React.ReactNode;
  /** TextButton의 오른쪽에 들어갈 아이콘 */
  rightIcon?: React.ReactElement<IconProps>;
  /** TextButton의 width */
  width?: string | number;
}
