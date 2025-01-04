import { forwardRef, useState } from 'react';

import {
  StyledTextarea,
  StyledContainer,
  StyledHelperText,
  StyledTextareaWrapper,
} from './Textarea.style';
import { TextareaProps } from './Textarea.type';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { width, height, maxLength, helperText, placeholder, disabled, error, onValueChange, ...props },
    ref
  ) => {
    const [value, setValue] = useState<string>('');

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      if (maxLength && newValue.length > maxLength) {
        return;
      }
      setValue(newValue);
      onValueChange?.(newValue);
    };

    return (
      <StyledContainer>
        <StyledTextareaWrapper
          $width={width}
          $height={height}
          $error={error}
          $isFocused={isFocused}
        >
          <StyledTextarea
            ref={ref}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            placeholder={placeholder}
            disabled={disabled}
            $error={error}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        </StyledTextareaWrapper>
        <StyledHelperText $error={error}>
          {maxLength ? `(${value.length}/${maxLength})` : helperText && helperText}
        </StyledHelperText>
      </StyledContainer>
    );
  }
);

Textarea.displayName = 'Textarea';
