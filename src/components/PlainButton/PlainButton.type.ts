export type PlainButtonSize = 'small' | 'medium' | 'large';

export interface PlainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** PlainButton의 크기를 결정하는 속성 */
  size: PlainButtonSize;
  /** PlainButton의 Pointed 여부를 결정하는 속성 */
  isPointed: boolean;
  /** PlainButton의 경고 여부를 결정하는 속성 */
  isWarned: boolean;
  /** PlainButton의 왼쪽에 들어갈 아이콘 */
  leftIcon?: React.ReactNode;
  /** PlainButton의 내용 */
  children?: React.ReactNode;
  /** PlainButton의 오른쪽에 들어갈 아이콘 */
  rightIcon?: React.ReactNode;
}
