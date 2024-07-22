import React, { forwardRef } from 'react';

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
        <>{leftIcon && React.cloneElement(leftIcon, { size: '20px' })}</>
        <span className="boxButton-child">{children}</span>
        <>{rightIcon && React.cloneElement(rightIcon, { size: '20px' })}</>
      </StyledBoxButton>
    );
  }
);
BoxButton.displayName = 'BoxButton';
