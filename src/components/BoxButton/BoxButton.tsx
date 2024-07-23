import { forwardRef } from 'react';

import { StyledBoxButton } from './BoxButton.style';

import { BoxButtonProps } from '.';

export const BoxButton = forwardRef<HTMLButtonElement, BoxButtonProps>(
  ({ size, hierarchy, width, leftIcon, children, rightIcon, ...props }, ref) => {
    return (
      <StyledBoxButton
        ref={ref}
        disabled={props.disabled}
        $size={size}
        $hierarchy={hierarchy}
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
