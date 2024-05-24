import { TextFieldProps } from '../TextField.type';

export interface SuffixTextFieldProps extends Omit<TextFieldProps, 'searchPrefix'> {}
