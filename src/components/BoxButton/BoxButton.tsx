import { forwardRef } from 'react';

import { StyledBoxButton } from './BoxButton.style';

import { BoxButtonProps } from '.';

export const BoxButton = forwardRef<HTMLButtonElement, BoxButtonProps>(
  ({ size, variant, width, leftIcon, children, rightIcon, ...props }, ref) => {
    return (
      <StyledBoxButton
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
      </StyledBoxButton>
    );
  }
);
BoxButton.displayName = 'BoxButton';
