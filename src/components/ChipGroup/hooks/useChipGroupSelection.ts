import { RefObject, useState } from 'react';

import { ChipProps, ChipRefPayloadType } from '@/components/Chip/Chip.type';

const useChipGroupSelection = (
  role: ChipProps['role'],
  groupRef: RefObject<HTMLDivElement>,
  chipRefs: RefObject<ChipRefPayloadType[]>
) => {
  const [selectedChips, setSelectedChips] = useState<HTMLDivElement[]>([]);

  const isChipClicked = (e: React.MouseEvent<HTMLElement>) => {
    const targetChip = (e.target as HTMLElement).closest('.chip') as HTMLElement | undefined;
    const isGroupClicked = e.target === e.currentTarget;
    const isChipClicked = !!targetChip;
    const isChipDisabled = targetChip?.dataset.disabled === 'true';
    return isChipClicked && !isGroupClicked && !isChipDisabled;
  };

  const getChipRefPayloadById = (id: string) => {
    if (!chipRefs.current) return undefined;
    return chipRefs.current.find((chipRef) => chipRef.id === id);
  };

  const suggestionRoleBehavior = (clickedChip: HTMLElement, chipElements: HTMLDivElement[]) => {
    let isChipSetted = false;
    const clickedChipId = clickedChip.id;
    const isClickedChipSelectedBefore = clickedChip.dataset.selected === 'true';

    chipElements.forEach((chip) => {
      const isClickedChip = chip.id === clickedChipId;

      getChipRefPayloadById(chip.id)?.setInnerSelected(
        isClickedChip && !isClickedChipSelectedBefore
      );

      if (isClickedChip && !isClickedChipSelectedBefore) {
        setSelectedChips([chip as HTMLDivElement]);
        isChipSetted = true;
      }
    });

    if (!isChipSetted) setSelectedChips([]);
  };

  const filterRoleBehavior = (chipElements: HTMLDivElement[]) => {
    requestAnimationFrame(() => {
      const selectedChipElements = chipElements.filter((chip) => {
        const typedChip = chip;
        return typedChip.dataset.selected === 'true';
      });
      setSelectedChips(selectedChipElements);
    });
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isChipClicked(e)) return;

    const clickedChip = (e.target as HTMLElement).closest('.chip') as HTMLElement;
    const chipElements = Array.from(
      groupRef.current!.querySelectorAll('.chip')
    ) as HTMLDivElement[];

    if (role === 'suggestion') {
      suggestionRoleBehavior(clickedChip, chipElements);
    } else if (role === 'filter') {
      filterRoleBehavior(chipElements);
    }
  };

  return { selectedChips, onClick };
};

export { useChipGroupSelection };
