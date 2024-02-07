export type CheckBoxSize = 'small' | 'medium' | 'large';

export interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** CheckBox의 크기를 결정하는 속성 */
  size?: CheckBoxSize;
  /** CheckBox의 선택 여부를 결정하는 속성 */
  isSelected?: HTMLInputElement['checked'];
  /** CheckBox의 비활성화 여부를 결정하는 속성 */
  isDisabled?: HTMLInputElement['disabled'];
  /** CheckBox의 내용 */
  children?: React.ReactNode;
}
