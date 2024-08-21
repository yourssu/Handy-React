export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width: string;
  height: string;
  maxLength?: number;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
}
