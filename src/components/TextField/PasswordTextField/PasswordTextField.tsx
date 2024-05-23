import { forwardRef, useState } from 'react';

import { useTheme } from 'styled-components';

import { IcEyeclosedLine, IcEyeopenLine, IconContext } from '@/style';

import { TextField } from '../TextField';

import { PasswordTextFieldProps } from './PasswordTextField.type';

export const PasswordTextField = forwardRef<HTMLInputElement, PasswordTextFieldProps>(
  ({ isMarked = true, ...props }, ref) => {
    const theme = useTheme();
    const [isMarkedValue, setIsMarkedValue] = useState(isMarked);

    const onClickEyeButton = () => {
      setIsMarkedValue((prev) => !prev);
    };

    return (
      <TextField
        ref={ref}
        type={isMarkedValue ? 'password' : 'text'}
        suffix={
          <IconContext.Provider
            value={{
              color: theme.color.buttonNormal,
              size: '1.5rem',
            }}
          >
            {isMarkedValue ? (
              <IcEyeclosedLine onClick={onClickEyeButton} />
            ) : (
              <IcEyeopenLine onClick={onClickEyeButton} />
            )}
          </IconContext.Provider>
        }
        {...props}
      ></TextField>
    );
  }
);
