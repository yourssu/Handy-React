export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width: string;
  height: string;
  helperText?: string;
  error?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
}
