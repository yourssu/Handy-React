import { IconContext } from '@/style';

import { StyledBadge } from './Badge.style';
import { BadgeProps } from './Badge.type';

const Badge = ({ color = 'monoItemBG', children = 'Badge', leftIcon, ...props }: BadgeProps) => {
  return (
    <StyledBadge
      style={{
        padding: leftIcon ? '0 8px' : '0 12px',
      }}
      $backgroundColor={color}
      {...props}
    >
      {leftIcon && (
        <IconContext.Provider
          value={{
            color: '#0f0f0f',
            size: '1rem',
          }}
        >
          {leftIcon}
        </IconContext.Provider>
      )}
      {children}
    </StyledBadge>
  );
};

export { Badge };
