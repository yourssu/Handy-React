import { forwardRef, useImperativeHandle, useRef } from 'react';

import {
  StyledCheckboxChecker,
  StyledCheckboxCheckIconWrapper,
  StyledCheckboxContainer,
  StyledCheckboxInput,
  StyledCheckboxLabel,
} from '@/components/Checkbox/Checkbox.style';
import { CheckboxProps } from '@/components/Checkbox/Checkbox.type';
import { IcCheckFilled } from '@/style';

export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
  ({ size = 'medium', selected, disabled, children, onChange, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const onChangeWrapper = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
    };

    return (
      <StyledCheckboxContainer ref={ref}>
        <StyledCheckboxLabel>
          <StyledCheckboxChecker $size={size}>
            <StyledCheckboxCheckIconWrapper $size={size}>
              <IcCheckFilled className="check-icon" />
            </StyledCheckboxCheckIconWrapper>
          </StyledCheckboxChecker>

          <StyledCheckboxInput
            ref={inputRef}
            type="checkbox"
            onChange={onChangeWrapper}
            checked={selected}
            disabled={disabled}
            {...props}
          />

          <div>{children}</div>
        </StyledCheckboxLabel>
      </StyledCheckboxContainer>
    );
  }
);
