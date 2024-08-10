import { forwardRef, useImperativeHandle, useRef } from 'react';

import { StyledChipGroupContainer } from '@/components/ChipGroup/ChipGroup.style';
import { ChipGroupProps, ChipGroupRefPayloadType } from '@/components/ChipGroup/ChipGroup.type';
import { useChipChildren } from '@/components/ChipGroup/hooks/useChipChildren';
import { useChipGroupSelection } from '@/components/ChipGroup/hooks/useChipGroupSelection';
import { useSwipe } from '@/components/ChipGroup/hooks/useSwipe';
import { useUpdateEffect } from '@/hooks/useUpdateEffect/useUpdateEffect';

export const ChipGroup = forwardRef<ChipGroupRefPayloadType, ChipGroupProps>(
  ({ children, role, onSelectedChange, swipable = false, ...props }, ref) => {
    const groupRef = useRef<HTMLDivElement>(null);
    const { isSwiping, onPointerDown } = useSwipe(groupRef);
    const { chips, chipRefs } = useChipChildren(children, role);
    const { selectedChips, onClick } = useChipGroupSelection(role, groupRef, chipRefs);

    const clearAllSelected = () => {
      chipRefs.current.forEach((chipRef) => {
        chipRef.setInnerSelected(false);
      });
      onSelectedChange?.([]);
    };

    const onClickWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!groupRef.current) return;
      if (isSwiping) return;
      props.onClick?.(e);
      onClick(e);
    };

    useUpdateEffect(() => {
      onSelectedChange?.(selectedChips);
    }, [selectedChips]);

    useImperativeHandle(ref, () => ({
      element: groupRef.current,
      chipRefs,
      clearAllSelected,
    }));

    return (
      <StyledChipGroupContainer
        {...props}
        className="chip-group"
        ref={groupRef}
        $swipable={swipable}
        $isSwiping={isSwiping}
        onPointerDown={onPointerDown}
        onClick={onClickWrapper}
      >
        {chips}
      </StyledChipGroupContainer>
    );
  }
);
