export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 입력된 내용이 조건에 어긋나는지 나타내는 속성 */
  isNegative?: boolean;
  /** 입력된 내용이 조건에 부합하는지 나타내는 속성 */
  isPositive?: boolean;
  /** TextField에 포커스가 잡혀있는지 나타내는 속성 */
  isFocused?: boolean;
  /** isFocused=true일 때, 입력된 내용이 한 글자 이상인지 나타내는 속성 */
  isTyping?: boolean;

  /** TextField에 무엇을 입력해야 하는지 기입하는 속성 */
  fieldLabel?: string;
  /** TextField 아래에 들어가는 도움말 텍스트 */
  helperLabel?: string;
  /** TextField 내부 오른쪽에 들어갈 아이콘 (또는 텍스트) */
  suffix?: React.ReactNode;
  /** TextField 내부 왼쪽에 들어갈 검색 아이콘 */
  searchPrefix?: React.ReactNode;
  /** TextField의 width */
  width?: number | string;
}
