import { TextFieldProps } from '../TextField.type';

export interface PasswordTextFieldProps extends TextFieldProps {
  /** 입력된 내용을 보지 못하게 할 것인지 나타내는 속성 */
  isMarked?: boolean;
}
