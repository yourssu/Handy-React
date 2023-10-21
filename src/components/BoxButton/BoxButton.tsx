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
        $variant={props.variant}
        $rounding={props.rounding}
        $isWarned={props.isWarned}
        $width={props.width}
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
