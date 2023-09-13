import { createContext } from 'react';

import type { IconProps } from './icon.type';

export const IconContext = createContext<IconProps>({
    color: 'currentColor',
    size: '1em',
    mirrored: false,
});
