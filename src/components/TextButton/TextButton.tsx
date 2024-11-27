import { forwardRef } from 'react';

import { StyledTextButton } from './TextButton.style';

import { TextButtonProps } from '.';

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ size, variant, width, leftIcon, children, rightIcon, ...props }, ref) => {
    return (
      <StyledTextButton
        ref={ref}
        disabled={props.disabled}
        $size={size}
        $variant={variant}
        $width={width}
        {...props}
      >
        <>{leftIcon}</>
        <span>{children}</span>
        <>{rightIcon}</>
      </StyledTextButton>
    );
  }
);
TextButton.displayName = 'TextButton';
