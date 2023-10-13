import { MouseEvent, forwardRef, useImperativeHandle, useRef } from 'react';

import { StyledToggle, StyeldInput, StyledTrack, StyledThumb } from './Toggle.style';
import { ToggleProps } from './Toggle.type';

export const Toggle = forwardRef<HTMLDivElement, ToggleProps>(
  ({ isDisabled = false, isSelected = false, ...props }, ref) => {
    const toggleRef = useRef<HTMLInputElement | null>(null);
    useImperativeHandle(ref, () => toggleRef.current as HTMLInputElement);

    const handleToggleClick = (event: MouseEvent) => {
      event.preventDefault();

      if (isDisabled) return;
      if (toggleRef.current) {
        toggleRef.current.checked = !toggleRef.current.checked;
      }
    };

    return (
      <StyledToggle
        ref={ref}
        onClick={(event) => {
          handleToggleClick(event);
        }}
      >
        <StyeldInput
          ref={toggleRef}
          type="checkbox"
          disabled={isDisabled}
          checked={isSelected}
          {...props}
          readOnly
        />
        <StyledTrack $isDisabled={isDisabled} $isSelected={isSelected}>
          <StyledThumb $isDisabled={isDisabled} $isSelected={isSelected} />
        </StyledTrack>
      </StyledToggle>
    );
  }
);
