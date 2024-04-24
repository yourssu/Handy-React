import { useTheme } from 'styled-components';

import { IcXLine, IconContext } from '@/style';

import { TextField } from '../TextField';

import { SimpleTextFieldProps } from './SimpleTextField.type';

export const SimpleTextField = ({ onClickClearButton, ...props }: SimpleTextFieldProps) => {
  return (
    <TextField
      suffix={
        <IconContext.Provider
          value={{
            color: useTheme().color.buttonNormal,
            size: '1rem',
          }}
        >
          <div className="suffix-icon clear-icon" onClick={onClickClearButton}>
            <IcXLine />
          </div>
        </IconContext.Provider>
      }
      {...props}
    />
  );
};
