import { forwardRef, useEffect, useState } from 'react';

import { StyledTrack, StyledThumb } from './Switch.style';
import { SwitchProps } from './Switch.type';

export const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  ({ isDisabled = false, isSelected = false, size, onSelectedChange, ...props }, ref) => {
    const [innerSelected, setInnerSelected] = useState(isSelected);

    const handleSwitchClick = () => {
      if (isDisabled) return;

      setInnerSelected((prev) => !prev);
      onSelectedChange?.(!innerSelected);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.code !== 'Space' || isDisabled) return;

      event.preventDefault();
      setInnerSelected((prev) => !prev);
      onSelectedChange?.(!innerSelected);
    };

    useEffect(() => {
      setInnerSelected(isDisabled ? false : isSelected);
    }, [isSelected, isDisabled]);

    return (
      <StyledTrack
        {...props}
        ref={ref}
        role="switch"
        tabIndex={0}
        aria-checked={innerSelected}
        data-selected={innerSelected}
        onClick={handleSwitchClick}
        onKeyDown={handleKeyDown}
        $isDisabled={isDisabled}
        $isSelected={innerSelected}
        $size={size}
      >
        <StyledThumb $isDisabled={isDisabled} $isSelected={innerSelected} $size={size} />
      </StyledTrack>
    );
  }
);

Switch.displayName = 'Switch';
