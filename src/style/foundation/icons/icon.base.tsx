import { forwardRef } from 'react';

import { IconProps } from './icon.type';

export const IconBase = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size, color, mirrored, children, ...rest } = props;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      transform={mirrored ? 'scale(-1, 1)' : undefined}
      {...rest}
    >
      {children}
    </svg>
  );
});

IconBase.displayName = 'IconBase';
