import React, { Children, cloneElement, ReactElement, ReactNode, useRef } from 'react';

import { Chip } from '@/components/Chip/Chip';
import { ChipProps, ChipRefPayloadType } from '@/components/Chip/Chip.type';

const useChipChildren = (children: React.ReactNode, role: ChipProps['role']) => {
  const chipRefs = useRef<ChipRefPayloadType[]>([]);

  const isChip = (child: ReactNode) => {
    if (!React.isValidElement(child)) return false;
    if (child.type !== Chip) return false;
    if ((child as ReactElement<ChipProps>).props.role === undefined) return false;
    return true;
  };

  const assertChipRoleIsGroup = (chip: ReactElement<ChipProps>) => {
    if (chip.props.role !== 'group') {
      throw new Error(
        'ChipGroup 컴포넌트 내부의 Chip 컴포넌트에서는 role:group을 사용해야 합니다.'
      );
    }
    return chip;
  };

  const injectRole = (
    chip: ReactElement<React.PropsWithoutRef<ChipProps> & React.RefAttributes<ChipRefPayloadType>>,
    idx: number
  ) => {
    const ref = (chipRef: ChipRefPayloadType) => {
      chipRefs.current[idx] = chipRef;
    };

    return cloneElement(chip, {
      ...chip.props,
      role,
      ref,
    });
  };

  const toChipGroupChild = (chip: ReactNode, idx: number) => {
    const typedChip = chip as ReactElement<ChipProps>;
    assertChipRoleIsGroup(typedChip);
    return injectRole(typedChip, idx);
  };

  return {
    chips: Children.toArray(children).filter(isChip).map(toChipGroupChild),
    chipRefs,
  };
};

export { useChipChildren };
