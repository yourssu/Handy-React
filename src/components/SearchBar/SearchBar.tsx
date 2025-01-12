import { forwardRef } from 'react';

import { IcSearchLine } from '@/style';

import { StyledContainer, StyledInput } from './SearchBar.style';

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
  }
);
