import {
  StyledFieldLabel,
  StyledHelperLabel,
  StyledTextField,
  StyledTextFieldWrapper,
} from './TextField.style';
import { TextFieldProps } from './TextField.type';

export const TextField = ({
  isNegative,
  isPositive,
  isFocused,
  isTyping,
  fieldLabel,
  helperLabel,
  suffix,
  searchPrefix,
  width,
  ...props
}: TextFieldProps) => {
  return (
    <StyledFieldLabel $isDisabled={props.disabled}>
      {fieldLabel}
      <StyledTextFieldWrapper
        $isNegative={isNegative}
        $isPositive={isPositive}
        $isFocused={isFocused}
        $isTyping={isTyping}
        $isDisabled={props.disabled}
        $width={width}
      >
        {searchPrefix}
        <StyledTextField {...props} />
        {suffix}
      </StyledTextFieldWrapper>
      {helperLabel && (
        <StyledHelperLabel $isNegative={isNegative} $isDisabled={props.disabled}>
          {helperLabel}
        </StyledHelperLabel>
      )}
    </StyledFieldLabel>
  );
};
