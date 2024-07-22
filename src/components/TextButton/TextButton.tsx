import React, { forwardRef } from 'react';

import { StyledTextButton } from './TextButton.style';

import { TextButtonProps } from '.';

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ size, hierarchy, width, leftIcon, children, rightIcon, ...props }, ref) => {
    return (
      <StyledTextButton
        ref={ref}
        disabled={props.disabled}
        $size={size}
        $hierarchy={hierarchy}
        $width={width}
        {...props}
      >
        <>{leftIcon && React.cloneElement(leftIcon, { size: '20px' })}</>
        <span className="textButton-child">{children}</span>
        <>{rightIcon && React.cloneElement(rightIcon, { size: '20px' })}</>
      </StyledTextButton>
    );
  }
);
TextButton.displayName = 'TextButton';
