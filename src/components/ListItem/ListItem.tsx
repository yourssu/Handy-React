import { IconContext } from '@/style';

import { StyledListItem } from './ListItem.style';
import { ListItemProps } from './ListItem.type';

export const ListItem = ({ isPressed, leftIcon, rightIcon, children, ...props }: ListItemProps) => {
  return (
    <StyledListItem $isPressed={isPressed} $width={props.width} {...props}>
      {leftIcon && (
        <IconContext.Provider value={{ color: 'currentColor' }}>
          <div className="icon left-icon">{leftIcon}</div>
        </IconContext.Provider>
      )}
      <span className="listItem-child">{children}</span>
      {rightIcon && (
        <IconContext.Provider value={{ color: 'currentColor' }}>
          <div className="icon right-icon">{rightIcon}</div>
        </IconContext.Provider>
      )}
    </StyledListItem>
  );
};
