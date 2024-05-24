import { forwardRef } from 'react';

import { IconContext } from '@/style';

import { StyledPlainButton } from './PlainButton.style';

import { PlainButtonProps } from '.';

export const PlainButton = forwardRef<HTMLButtonElement, PlainButtonProps>(
  ({ size, isPointed, isWarned, leftIcon, children, rightIcon, ...props }, ref) => {
    return (
      <StyledPlainButton
        ref={ref}
        disabled={props.disabled}
        $size={size}
        $isPointed={isPointed}
        $isWarned={isWarned}
        {...props}
      >
        <IconContext.Provider
          value={{
            color: 'currentColor',
          }}
        >
          <div className="icon left-icon">{leftIcon}</div>
        </IconContext.Provider>
        {size !== 'large' && <span className="plainButton-child">{children}</span>}
        {!leftIcon && (
          <IconContext.Provider
            value={{
              color: 'currentColor',
            }}
          >
            <div className="icon right-icon">{rightIcon}</div>
          </IconContext.Provider>
        )}
      </StyledPlainButton>
    );
  }
);
PlainButton.displayName = 'PlainButton';
