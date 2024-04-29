import { TextField } from '../TextField';

import { SuffixTextFieldProps } from './SuffixTextField.type';

export const SuffixTextField = ({ suffix, ...props }: SuffixTextFieldProps) => {
  return <TextField suffix={suffix} {...props} />;
};
