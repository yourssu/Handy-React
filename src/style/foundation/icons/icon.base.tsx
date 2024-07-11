import { forwardRef } from 'react';

import { IconProps } from './icon.type';

export const IconBase = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size, color, children, ...rest } = props;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? '24px'}
      height={size ?? '24px'}
      fill={color ?? 'current'}
      {...rest}
    >
      {children}
    </svg>
  );
});

IconBase.displayName = 'IconBase';
