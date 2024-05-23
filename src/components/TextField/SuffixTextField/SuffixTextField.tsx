import { forwardRef } from 'react';

import { TextField } from '../TextField';

import { SuffixTextFieldProps } from './SuffixTextField.type';

export const SuffixTextField = forwardRef<HTMLInputElement, SuffixTextFieldProps>(
  ({ suffix, ...props }: SuffixTextFieldProps) => {
    return <TextField suffix={suffix} {...props} />;
  }
);
