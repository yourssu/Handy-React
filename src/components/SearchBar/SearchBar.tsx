import { forwardRef } from 'react';

import { IcCancelFilled, IcSearchLine } from '@/style';

import { StyledClearButton, StyledContainer, StyledInput } from './SearchBar.style';

const SearchBarClearButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <StyledClearButton ref={ref} className={`searchbar-close-button ${className}`} {...props}>
      <IcCancelFilled />
    </StyledClearButton>
  );
});

const SearchBarInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return <StyledInput ref={ref} {...props} />;
  }
);

SearchBarInput.displayName = 'SearchBarInput';

export const SearchBar = Object.assign(
  forwardRef<HTMLFormElement, React.FormHTMLAttributes<HTMLFormElement>>((props, ref) => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      props.onSubmit?.(e);
    };

    return (
      <StyledContainer ref={ref} {...props} onSubmit={onSubmit}>
        <IcSearchLine className="searchbar-icon" size="20px" />
        {props.children}
      </StyledContainer>
    );
  }),
  {
    Input: SearchBarInput,
    ClearButton: SearchBarClearButton,
  }
);
