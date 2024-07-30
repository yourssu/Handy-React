import { forwardRef, useId, useImperativeHandle, useRef, useState } from 'react';

import {
  StyledChipContainer,
  StyledChipContent,
  StyledChipIconWrapper,
} from '@/components/Chip/Chip.style';
import {
  ChipContentProps,
  ChipIconProps,
  ChipIconRemoveProps,
  ChipProps,
  ChipRefPayloadType,
} from '@/components/Chip/Chip.type';
import { IcCloseFilled } from '@/style';

const ChipIcon = ({ children, position, onClick }: ChipIconProps) => {
  return (
    <StyledChipIconWrapper $order={position} onClick={onClick} $clickable={!!onClick}>
      {children}
    </StyledChipIconWrapper>
  );
};

const ChipIconRemove = ({ onClick }: ChipIconRemoveProps) => {
  const onClickWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);

    const target = e.target as HTMLElement;
    const chip = target.closest('.chip') as HTMLElement;

    if (!chip || chip.dataset.disabled === 'true') return;

    chip.remove();
  };

  return (
    <StyledChipIconWrapper $order="right" className="remove" onClick={onClickWrapper} $clickable>
      <IcCloseFilled />
    </StyledChipIconWrapper>
  );
};

const ChipContent = ({ children }: ChipContentProps) => {
  return <StyledChipContent>{children}</StyledChipContent>;
};

export const Chip = Object.assign(
  forwardRef<ChipRefPayloadType, ChipProps>(
    ({ children, role, size, selected, disabled = false, ...props }, ref) => {
      const id = useId();
      const elementRef = useRef<HTMLDivElement>(null);
      const [innerSelected, setInnerSelected] = useState(false);

      useImperativeHandle(ref, () => ({
        id: props.id ?? id,
        element: elementRef.current,
        setInnerSelected,
      }));

      if (role === 'input' && (selected === true || innerSelected === true)) {
        console.error('Chip 컴포넌트는 role:input이라면, selected는 true일 수 없습니다.');
        return null;
      }

      if (role === 'group') {
        console.error(
          'Chip 컴포넌트에서 role:group을 사용하려면, ChipGroup 컴포넌트를 사용해주세요.'
        );
        return null;
      }

      const onClickWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClick?.(e);
        if (role === 'input') return;
        setInnerSelected((prev) => !prev);
      };

      return (
        <StyledChipContainer
          {...props}
          id={props.id ?? id}
          ref={elementRef}
          className="chip"
          $size={size}
          $isRoleInput={role === 'input' && props.onClick === undefined}
          $selected={role === 'input' ? false : selected ?? innerSelected}
          $disabled={disabled}
          data-selected={role === 'input' ? false : selected ?? innerSelected}
          data-disabled={disabled}
          onClick={onClickWrapper}
        >
          {children}
        </StyledChipContainer>
      );
    }
  ),
  {
    Icon: ChipIcon,
    Remove: ChipIconRemove,
    Content: ChipContent,
  }
);
