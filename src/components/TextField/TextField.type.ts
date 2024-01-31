export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isNegative?: boolean;
  isPositive?: boolean;
  isFocused?: boolean;
  isTyping?: boolean;

  fieldLabel?: string;
  helperLabel?: string;
  suffix?: React.ReactNode;
  searchPrefix?: React.ReactNode;
}
