import { styled } from 'styled-components';

export const StyledChipContainer = styled.div<{ $selected: boolean; $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  padding: 0 12px;
  height: 32px;

  border-radius: 9999px;

  background-color: ${({ $selected, $disabled }) =>
    $disabled ? '#F7F8F8' : $selected ? '#DDE1FF' : '#F1F1F4'};

  color: ${({ $selected, $disabled }) =>
    $disabled ? '#B5B9C4' : $selected ? '#6B5CFF' : '#4B505D'};

  svg {
    fill: ${({ $selected, $disabled }) =>
      $disabled ? '#B5B9C4' : $selected ? '#6B5CFF' : '#4B505D'};
  }

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  ${({ theme, $selected }) => ($selected ? theme.typo.B3_Sb_14 : theme.typo.B3_Rg_14)};
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
