export interface TextFieldContextProps {
  isError: boolean;
  disabled: boolean;
  maxLength: number;
}

export type TextFieldProps = Partial<TextFieldContextProps> &
  React.HTMLAttributes<HTMLInputElement> & {
    defaultValue?: string;
  };

export interface ClearButtonProps {
  inputRef: React.RefObject<HTMLInputElement>;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
