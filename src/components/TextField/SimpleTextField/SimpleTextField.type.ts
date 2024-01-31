import { TextFieldProps } from '../TextField.type';

export interface SimpleTextFieldProps extends TextFieldProps {
  onClickClearButton?: () => void;
}
