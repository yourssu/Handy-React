import { forwardRef } from 'react';

import { useTheme } from 'styled-components';

import { IcSearchLine, IcXLine, IconContext } from '@/style';

import { TextField } from '../TextField';

import { SearchTextFieldProps } from './SearchTextField.type';

export const SearchTextField = forwardRef<HTMLInputElement, SearchTextFieldProps>(
  ({ onClickClearButton, ...props }, ref) => {
    const theme = useTheme();

    return (
      <TextField
        ref={ref}
        suffix={
          <IconContext.Provider
            value={{
              color: theme.color.buttonNormal,
              size: '1rem',
            }}
          >
            <IcXLine onClick={onClickClearButton} />
          </IconContext.Provider>
        }
        searchPrefix={
          <IconContext.Provider
            value={{
              color: theme.color.textTertiary,
              size: '1.25rem',
            }}
          >
            <IcSearchLine />
          </IconContext.Provider>
        }
        {...props}
      />
    );
  }
);
SearchTextField.displayName = 'SearchTextField';
