export type BoxButtonSize = 'small' | 'medium' | 'large' | 'extraLarge';
export type BoxButtonRounding = 4 | 8;
export type BoxButtonVariant = 'filled' | 'tinted' | 'line';

export interface BoxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** BoxButton의 크기를 결정하는 속성 */
  size: BoxButtonSize;
  /** BoxButton의 모서리를 결정하는 속성 */
  rounding: BoxButtonRounding;
  /** BoxButton의 비활성화 여부를 결정하는 속성, 비활성화 상태에는 pressed 효과가 존재하지 않습니다. */
  isDisabled: HTMLButtonElement['disabled'];
  /** BoxButton의 경고 여부를 결정하는 속성 */
  isWarned: boolean;
  /** BoxButton의 모양을 결정하는 속성 */
  variant: BoxButtonVariant;
  /** BoxButton의 왼쪽에 들어갈 아이콘 */
  leftIcon?: React.ReactNode;
  /** BoxButton의 내용 */
  children?: React.ReactNode;
  /** BoxButton의 오른쪽에 들어갈 아이콘 */
  rightIcon?: React.ReactNode;
  /** BoxButton의 width */
  width?: string | number;
}
