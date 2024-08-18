import { createContext } from 'react';

interface TextFieldContextProps {
  isError?: boolean;
  disabled?: boolean;
}

export const TextFieldContext = createContext<TextFieldContextProps>({
  isError: undefined,
  disabled: undefined,
});
