import { forwardRef, useRef, useState } from 'react';

import { IcCheckcircleFilled, IcCheckcircleLine } from '@/style';

import { StyledCheckBoxWrapper } from './CheckBox.style';
import { CheckBoxProps } from './CheckBox.type';

export const CheckBox = forwardRef<HTMLDivElement, CheckBoxProps>(
  (
    { size = 'medium', isDisabled = false, isSelected: propIsSelected = false, children, ...props },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [isSelected, setIsSelected] = useState(propIsSelected);

    const handleWrapperClick = () => {
      if (isDisabled) return;
      if (inputRef.current) {
        inputRef.current.checked = !inputRef.current.checked;
        setIsSelected(inputRef.current.checked);
      }
    };
    return (
      <StyledCheckBoxWrapper
        ref={ref}
        $size={size}
        $isDisabled={isDisabled}
        $isSelected={isSelected}
        onClick={handleWrapperClick}
      >
        <div className="icon">
          {isSelected ? (
            <IcCheckcircleFilled style={{ width: '100%', height: '100%' }} />
          ) : (
            <IcCheckcircleLine style={{ width: '100%', height: '100%' }} />
          )}
        </div>
        <div className="icon-padding" />
        <input ref={inputRef} className="checkbox" type="checkbox" {...props} />
        <label className="label">{children}</label>
      </StyledCheckBoxWrapper>
    );
  }
);
