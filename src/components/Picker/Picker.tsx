import { forwardRef } from 'react';

import { StyledPicker } from './Picker.style';
import { PickerProps } from './Picker.type';

export const Picker = forwardRef<HTMLDivElement, PickerProps>(({ children, ...props }, ref) => {
  return (
    <StyledPicker ref={ref} {...props}>
      {children}
    </StyledPicker>
  );
});
Picker.displayName = 'Picker';
