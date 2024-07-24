import { StyledChipGroupContainer } from '@/components/ChipGroup/ChipGroup.style';
import { ChipGroupProps } from '@/components/ChipGroup/ChipGroup.type';

export const ChipGroup = ({ children }: ChipGroupProps) => {
  return <StyledChipGroupContainer>{children}</StyledChipGroupContainer>;
};
