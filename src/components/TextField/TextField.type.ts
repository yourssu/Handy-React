export interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  disabled?: boolean;
}

export interface ClearButtonProps {
  inputRef: React.RefObject<HTMLInputElement>;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
