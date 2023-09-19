import { forwardRef } from 'react';

import { IconContext } from '@/style';

import { StyledBoxButton } from './BoxButton.style';

import { BoxButtonProps } from '.';

export const BoxButton = forwardRef<HTMLButtonElement, BoxButtonProps>(
  ({ leftIcon, children, rightIcon, ...props }, ref) => {
    return (
      <StyledBoxButton
        ref={ref}
        disabled={props.isDisabled}
        $size={props.size}
        $type={props.type}
        $rounding={props.rounding}
        $isWarned={props.isWarned}
      >
        {leftIcon && (
          <IconContext.Provider
            value={{
              color: 'currentColor',
              width: 24,
              height: 24,
            }}
          >
            {leftIcon}
          </IconContext.Provider>
        )}
        {children}
        {rightIcon && (
          <IconContext.Provider
            value={{
              color: 'currentColor',
              width: 24,
              height: 24,
            }}
          >
            {rightIcon}
          </IconContext.Provider>
        )}
      </StyledBoxButton>
    );
  }
);
