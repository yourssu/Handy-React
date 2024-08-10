import { styled } from 'styled-components';

import { ChipSizeType } from '@/components/Chip/Chip.type';

interface StyledChipContainerProps {
  $size: ChipSizeType;
  $selected: boolean;
  $disabled: boolean;
  $isRoleInput: boolean;
}

export const StyledChipContainer = styled.div<StyledChipContainerProps>`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  padding-left: 12px;
  padding-right: 12px;
  padding-top: ${({ $size }) => ($size === 'small' ? '2px' : '6px')};
  padding-bottom: ${({ $size }) => ($size === 'small' ? '2px' : '6px')};

  border-radius: 9999px;

  background-color: ${({ $selected, $disabled, theme }) =>
    $disabled
      ? theme.semantic.color.chipDisabled
      : $selected
        ? theme.semantic.color.chipSelected
        : theme.semantic.color.chipUnselected};

  color: ${({ $selected, $disabled, theme }) =>
    $disabled
      ? theme.semantic.color.textBasicDisabled
      : $selected
        ? theme.semantic.color.textBrandPrimary
        : theme.semantic.color.textBasicSecondary};

  svg {
    fill: ${({ $selected, $disabled, theme }) =>
      $disabled
        ? theme.semantic.color.textBasicDisabled
        : $selected
          ? theme.semantic.color.textBrandPrimary
          : theme.semantic.color.textBasicSecondary};
  }

  cursor: ${({ $disabled, $isRoleInput }) =>
    $isRoleInput ? 'default' : $disabled ? 'not-allowed' : 'pointer'};

  ${({ theme, $selected, $disabled }) =>
    $selected && !$disabled ? theme.typo.B3_Sb_14 : theme.typo.B3_Rg_14};
`;

export const StyledChipContent = styled.span`
  order: 2;
`;

export const StyledChipIconWrapper = styled.div<{ $order?: 'left' | 'right'; $clickable: boolean }>`
  width: 16px;
  height: 16px;

  order: ${({ $order }) => ($order === undefined ? 2 : $order === 'left' ? 1 : 3)};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }

  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
`;
