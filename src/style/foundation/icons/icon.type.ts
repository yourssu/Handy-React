import { ComponentPropsWithRef } from 'react';

export interface IconProps extends ComponentPropsWithRef<'svg'> {
  size?: number | string;
  color?: string;
}
