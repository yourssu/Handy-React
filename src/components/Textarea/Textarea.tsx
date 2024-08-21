import { forwardRef, useState } from 'react';

import { StyledTextarea, StyledContainer, StyledHelperText } from './Textarea.style';
import { TextareaProps } from './Textarea.type';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { width, height, maxLength, helperText, placeholder, disabled, error, onValueChange, ...props },
    ref
  ) => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      if (maxLength && e.target.value.length > maxLength) {
        return;
      }
      setValue(newValue);
      onValueChange?.(newValue);
    };

    return (
      <StyledContainer>
        <StyledTextarea
          ref={ref}
          $width={width}
          $height={height}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder={placeholder}
          disabled={disabled}
          $error={error}
          {...props}
        />
        <StyledHelperText $error={error}>
          {helperText && helperText} {maxLength && `(${value.length}/${maxLength})`}
        </StyledHelperText>
      </StyledContainer>
    );
  }
);

Textarea.displayName = 'Textarea';
