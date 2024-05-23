import { forwardRef } from 'react';

import { TextField } from '../TextField';

import { SuffixTextFieldProps } from './SuffixTextField.type';

export const SuffixTextField = forwardRef<HTMLInputElement, SuffixTextFieldProps>(
  ({ suffix, ...props }, ref) => {
    return <TextField ref={ref} suffix={suffix} {...props} />;
  }
);
SuffixTextField.displayName = 'SuffixTextField';
