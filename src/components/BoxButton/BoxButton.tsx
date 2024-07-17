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
        <div>{leftIcon}</div>
        <span className="boxButton-child">{children}</span>
        <div>{rightIcon}</div>
      </StyledBoxButton>
    );
  }
);
BoxButton.displayName = 'BoxButton';
