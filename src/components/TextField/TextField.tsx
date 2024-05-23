import { forwardRef } from 'react';

import {
  StyledFieldLabel,
  StyledHelperLabel,
  StyledSuffixIconContainer,
  StyledSuffixText,
  StyledTextField,
  StyledTextFieldWrapper,
} from './TextField.style';
import { TextFieldProps } from './TextField.type';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
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
    },
    ref
  ) => {
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
          <StyledTextField ref={ref} {...props} />
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
  }
);
TextField.displayName = 'TextField';
