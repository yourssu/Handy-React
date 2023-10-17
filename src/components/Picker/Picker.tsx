import { forwardRef } from 'react';
import { PickerProps } from './Picker.type';
import { StyledPicker } from './Picker.style';

export const Picker = forwardRef<HTMLDivElement, PickerProps>(({ children, ...props }, ref) => {
  return (
    <StyledPicker ref={ref} {...props}>
      {children}
    </StyledPicker>
  );
});
Picker.displayName = 'Picker';
