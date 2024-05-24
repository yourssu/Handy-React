export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /** ListItem의 선택 여부를 나타내는 속성 */
  isPressed?: boolean;
  /** ListItem의 width */
  width?: string | number;
  /** ListItem의 내용 */
  children?: React.ReactNode;
  /** ListItem의 왼쪽에 들어갈 아이콘 */
  leftIcon?: React.ReactNode;
  /** ListItem의 오른쪽에 들어갈 아이콘 */
  rightIcon?: React.ReactNode;
}
