import { TextField } from '../TextField';

import { SuffixTextFieldProps } from './SuffixTextField.type';

export const SuffixTextField = ({ ...props }: SuffixTextFieldProps) => {
  return <TextField suffix={props.suffix} {...props} />;
};
