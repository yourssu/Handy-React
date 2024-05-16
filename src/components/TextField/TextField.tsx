import {
  StyledFieldLabel,
  StyledHelperLabel,
  StyledSearchPrefixContainer,
  StyledSuffixIconContainer,
  StyledSuffixText,
  StyledTextField,
  StyledTextFieldWrapper,
} from './TextField.style';
import { TextFieldProps } from './TextField.type';

export const TextField = ({
  isNegative = false,
  isPositive = false,
  isFocused = false,
  isTyping = false,
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
        <StyledSearchPrefixContainer>{searchPrefix}</StyledSearchPrefixContainer>
        <StyledTextField {...props} />
        {typeof suffix === 'string' ? (
          <StyledSuffixText $isDisabled={props.disabled}>{suffix}</StyledSuffixText>
        ) : (
          <StyledSuffixIconContainer>{suffix}</StyledSuffixIconContainer>
        )}
      </StyledTextFieldWrapper>
      {helperLabel && (
        <StyledHelperLabel $isNegative={isNegative} $isDisabled={props.disabled}>
          {helperLabel}
        </StyledHelperLabel>
      )}
    </StyledFieldLabel>
  );
};
