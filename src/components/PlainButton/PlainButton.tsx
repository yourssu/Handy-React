import { forwardRef } from 'react';

import { IconContext } from '@/style';

import { StyledPlainButton } from './PlainButton.style';

import { PlainButtonProps } from '.';

export const PlainButton = forwardRef<HTMLButtonElement, PlainButtonProps>(
  ({ leftIcon, children, rightIcon, ...props }, ref) => {
    return (
      <StyledPlainButton
        ref={ref}
        disabled={props.disabled}
        $size={props.size}
        $isPointed={props.isPointed}
        $isWarned={props.isWarned}
        {...props}
      >
        <IconContext.Provider
          value={{
            color: 'currentColor',
          }}
        >
          <div className="icon left-icon">{leftIcon}</div>
        </IconContext.Provider>
        {props.size !== 'large' && <span className="plainButton-child">{children}</span>}
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
