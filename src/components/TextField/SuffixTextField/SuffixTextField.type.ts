import { TextFieldProps } from '../TextField.type';

export interface SuffixTextFieldProps extends Omit<TextFieldProps, 'searchPrefix'> {
  /** TextField 오른쪽에 들어갈 텍스트 */
  suffix?: string;
}
