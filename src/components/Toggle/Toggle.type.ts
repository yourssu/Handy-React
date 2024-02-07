export interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 비활성화 여부 */
  isDisabled?: boolean;
  /** 선택 여부 */
  isSelected?: boolean;
}
