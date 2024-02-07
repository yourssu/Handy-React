import { TextFieldProps } from '../TextField.type';

export interface SimpleTextFieldProps extends TextFieldProps {
  /** x 버튼을 클릭했을 때 이벤트 핸들러 */
  onClickClearButton?: () => void;
}
