import { IcXLine, IconContext } from '@/style';

import { TextField } from '../TextField';

import { SimpleTextFieldProps } from './SimpleTextField.type';

export const SimpleTextField = ({ onClickClearButton, ...props }: SimpleTextFieldProps) => {
  return (
    <TextField
      suffix={
        <IconContext.Provider
          value={{
            color: '#0f0f0f',
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
