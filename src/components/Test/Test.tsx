import React, { forwardRef } from 'react';

import { StyledTest } from './Test.style';

export interface TestProps extends React.ComponentPropsWithRef<'div'> {
  color?: string;
  children?: React.ReactNode;
}
export const Test = forwardRef<HTMLDivElement, TestProps>(
  ({ color = 'black', children, ...rest }, ref) => {
    return (
      <StyledTest ref={ref} $color={color} {...rest}>
        {children}
      </StyledTest>
    );
  }
);

Test.displayName = 'Test';
