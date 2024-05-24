import { forwardRef } from 'react';

import { IconContext } from '@/style';

import { StyledBoxButton } from './BoxButton.style';

import { BoxButtonProps } from '.';

export const BoxButton = forwardRef<HTMLButtonElement, BoxButtonProps>(
  ({ size, variant, rounding, isWarned, width, leftIcon, children, rightIcon, ...props }, ref) => {
    return (
      <StyledBoxButton
        ref={ref}
        disabled={props.disabled}
        $size={size}
        $variant={variant}
        $rounding={rounding}
        $isWarned={isWarned}
        $width={width}
        {...props}
      >
        <div>
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
        </div>
        <span className="boxButton-child">{children}</span>
        <div>
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
        </div>
      </StyledBoxButton>
    );
  }
);
BoxButton.displayName = 'BoxButton';
