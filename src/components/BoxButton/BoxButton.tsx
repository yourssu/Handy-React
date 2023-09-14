import { forwardRef } from 'react';

import { Button } from './BoxButton.style';
import { BoxButtonProps } from './BoxButton.type';

export interface Props extends BoxButtonProps {
  leftIcon: React.ReactNode;
  title: string;
  rightIcon: React.ReactNode;
}

export const BoxButton = forwardRef<HTMLButtonElement, Props>(
  ({ leftIcon, title, rightIcon, ...props }, ref) => {
    return (
      <Button disabled={props.isDisabled} ref={ref} {...props}>
        {leftIcon}
        {title}
        {rightIcon}
      </Button>
    );
  }
);
