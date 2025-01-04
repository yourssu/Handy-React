export interface TextFieldContextProps {
  isError: boolean;
  disabled: boolean;
  maxLength: number;
}

export type TextFieldProps = Partial<TextFieldContextProps> &
  React.InputHTMLAttributes<HTMLInputElement> & {
    value?: string;
    defaultValue?: string;
    onClearButtonClick?: () => void;
  };

export interface ClearButtonProps {
  inputRef: React.RefObject<HTMLInputElement>;
  isError: boolean;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onClick?: () => void;
}
