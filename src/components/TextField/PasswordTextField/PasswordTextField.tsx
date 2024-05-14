import { useState } from 'react';

import { useTheme } from 'styled-components';

import { IcEyeclosedLine, IcEyeopenLine, IconContext } from '@/style';

import { TextField } from '../TextField';

import { PasswordTextFieldProps } from './PasswordTextField.type';

export const PasswordTextField = ({ isMarked = true, ...props }: PasswordTextFieldProps) => {
  const [isMarkedValue, setIsMarkedValue] = useState(isMarked);
  const onClickEyeButton = () => {
    setIsMarkedValue((prev) => !prev);
  };
  return (
    <TextField
      type={isMarkedValue ? 'password' : 'text'}
      suffix={
        <IconContext.Provider
          value={{
            color: useTheme().color.buttonNormal,
            size: '1.5rem',
          }}
        >
          <div className="suffix-icon" onClick={onClickEyeButton}>
            {isMarkedValue ? <IcEyeclosedLine /> : <IcEyeopenLine />}
          </div>
        </IconContext.Provider>
      }
      {...props}
    ></TextField>
  );
};
