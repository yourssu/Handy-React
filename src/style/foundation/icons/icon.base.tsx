import { forwardRef, useContext } from 'react';

import { IconContext } from './icon.context';
import { IconProps } from './icon.type';

export const IconBase = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { size, color, mirrored, children, ...rest } = props;

    const {
        color: contextColor = 'current',
        size: contextSize,
        mirrored: contextMirrored = false,
        ...restContext
    } = useContext(IconContext);

    return (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size ?? contextSize}
            height={size ?? contextSize}
            fill={color ?? contextColor}
            transform={mirrored || contextMirrored ? 'scale(-1, 1)' : undefined}
            {...restContext}
            {...rest}
        >
            {children}
        </svg>
    );
});

IconBase.displayName = 'IconBase';
