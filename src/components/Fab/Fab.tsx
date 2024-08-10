import { forwardRef } from 'react';

import { StyledFab } from './Fab.style';
import { FabProps } from './Fab.type';

export const Fab = forwardRef<HTMLButtonElement, FabProps>(
  ({ size, hierarchy, children, ...props }, ref) => {
    return (
      <StyledFab ref={ref} $size={size} $hierarchy={hierarchy} {...props}>
        {children}
      </StyledFab>
    );
  }
);

Fab.displayName = 'Fab';
