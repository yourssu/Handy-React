export type BoxButtonSize = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
export type BoxButtonHierarchy = 'primary' | 'secondary' | 'tertiary';

export interface BoxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** BoxButton의 크기를 결정하는 속성 */
  size: BoxButtonSize;
  /** BoxButton의 모양을 결정하는 속성 */
  hierarchy: BoxButtonHierarchy;
  /** BoxButton의 왼쪽에 들어갈 아이콘 */
  leftIcon?: React.ReactNode;
  /** BoxButton의 내용 */
  children?: React.ReactNode;
  /** BoxButton의 오른쪽에 들어갈 아이콘 */
  rightIcon?: React.ReactNode;
  /** BoxButton의 width */
  width?: string | number;
}
