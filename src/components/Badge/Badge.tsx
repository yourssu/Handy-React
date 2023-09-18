import { IconContext, SemanticColor } from '../..';

import { StyledBadge } from './Badge.style';
import { BadgeProps, BadgeColor } from './Badge.type';

const backgroundColorMap: { [key in BadgeColor]: SemanticColor } = {
  [BadgeColor.Mono]: 'monoItemBG',
  [BadgeColor.Lime]: 'limeItemBG',
  [BadgeColor.Green]: 'greenItemBG',
  [BadgeColor.Emerald]: 'emeraldItemBG',
  [BadgeColor.Aqua]: 'aquaItemBG',
  [BadgeColor.Blue]: 'blueItemBG',
  [BadgeColor.Indigo]: 'indigoItemBG',
  [BadgeColor.Violet]: 'violetItemBG',
  [BadgeColor.Purple]: 'purpleItemBG',
  [BadgeColor.Pink]: 'pinkItemBG',
} as const;

function Badge({ color = BadgeColor.Mono, children = 'Badge', leftIcon }: BadgeProps) {
  return (
    <StyledBadge
      style={{
        padding: leftIcon ? '0 8px' : '0 12px',
      }}
      backgroundColor={backgroundColorMap[color]}
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
}

export { Badge };
