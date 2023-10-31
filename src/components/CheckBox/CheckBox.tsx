import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { IcCheckcircleFilled, IcCheckcircleLine } from '@/style';

import { StyledCheckBoxWrapper } from './CheckBox.style';
import { CheckBoxProps } from './CheckBox.type';

export const CheckBox = forwardRef<HTMLDivElement, CheckBoxProps>(
  ({ size = 'medium', isDisabled = false, onClick, children, isSelected, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const [_isSelected, _setIsSelected] = useState(isSelected);

    const componentClick = () => {
      if (isDisabled) return;
      if (!inputRef.current) return;

      inputRef.current.click();
    };

    const inputClick = (e: React.MouseEvent<HTMLInputElement>) => {
      if (isDisabled) return;
      if (!inputRef.current) return;
      _setIsSelected(e.currentTarget.checked);
      onClick?.(e);
    };

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!inputRef.current) return;
      _setIsSelected(e.currentTarget.checked);
    };

    useEffect(() => {
      if (!inputRef.current) return;
      inputRef.current.checked = !!isSelected;
      _setIsSelected(isSelected);
    }, [isSelected]);

    return (
      <StyledCheckBoxWrapper
        ref={ref}
        $size={size}
        $isDisabled={isDisabled}
        $isSelected={_isSelected}
        onClick={componentClick}
      >
        <div className="checkbox-icon">
          {_isSelected ? (
            <IcCheckcircleFilled style={{ width: '100%', height: '100%' }} />
          ) : (
            <IcCheckcircleLine style={{ width: '100%', height: '100%' }} />
          )}
        </div>
        <label>{children}</label>

        <input
          ref={inputRef}
          onClick={inputClick}
          onChange={inputOnChange}
          className="checkbox"
          type="checkbox"
          style={{ display: 'none' }}
          {...props}
        />
      </StyledCheckBoxWrapper>
    );
  }
);
CheckBox.displayName = 'CheckBox';
