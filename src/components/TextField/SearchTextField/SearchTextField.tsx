import { useTheme } from 'styled-components';

import { IcSearchLine, IcXLine, IconContext } from '@/style';

import { TextField } from '../TextField';

import { SearchTextFieldProps } from './SearchTextField.type';

export const SearchTextField = ({ onClickClearButton, ...props }: SearchTextFieldProps) => {
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
      searchPrefix={
        <IconContext.Provider
          value={{
            color: theme.color.textTertiary,
            size: '1.5rem',
          }}
        >
          <IcSearchLine />
        </IconContext.Provider>
      }
      {...props}
    />
  );
};
