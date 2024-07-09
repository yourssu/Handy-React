import { ComponentPropsWithRef } from 'react';

type IconSize = '12px' | '16px' | '20px' | '24px' | '28px' | '32px' | '36px';

export interface IconProps extends ComponentPropsWithRef<'svg'> {
  size?: IconSize;
  color?: string;
}
