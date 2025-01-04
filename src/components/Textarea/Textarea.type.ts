export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width: React.CSSProperties['width'];
  height: React.CSSProperties['height'];
  helperText?: string;
  error?: boolean;
  onValueChange?: (value: string) => void;
}
