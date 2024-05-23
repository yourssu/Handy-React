import { forwardRef } from 'react';

import { useTheme } from 'styled-components';

import { IcXLine, IconContext } from '@/style';

import { TextField } from '../TextField';

import { SimpleTextFieldProps } from './SimpleTextField.type';

export const SimpleTextField = forwardRef<HTMLInputElement, SimpleTextFieldProps>(
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
        {...props}
      />
    );
  }
);
SimpleTextField.displayName = 'SimpleTextField';
