import { useTheme } from 'styled-components';

import { IcXLine, IconContext } from '@/style';

import { TextField } from '../TextField';

import { SimpleTextFieldProps } from './SimpleTextField.type';

export const SimpleTextField = ({ onClickClearButton, ...props }: SimpleTextFieldProps) => {
  const theme = useTheme();

  return (
    <TextField
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
};
