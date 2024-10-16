import { createContext } from 'react';

import { TextFieldContextProps } from './TextField.type';

type TextFieldInnerContextProps = {
  text: string;
} & TextFieldContextProps;

export const textFieldDefaultProps: TextFieldContextProps = {
  isError: false,
  disabled: false,
  maxLength: Infinity,
};

export const TextFieldContext = createContext<TextFieldInnerContextProps>({
  ...textFieldDefaultProps,
  text: '',
});
