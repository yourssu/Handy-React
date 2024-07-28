import { css, styled } from 'styled-components';

import { TabSize } from './Tabs.type';

export const StyledList = styled.div<{ $scrollable: boolean; $size: TabSize }>`
  display: flex;
  width: ${({ $scrollable }) => ($scrollable ? 'fit-content' : '100%')};

  & > button {
    ${({ $scrollable, $size, theme }) =>
      $scrollable && $size === 'small' ? theme.typo.B3_Sb_14 : theme.typo.B1_Sb_16};
  }
`;

const getDefaultTabStyle = ($isSelected: boolean) => {
  return css`
    border: none;
    min-width: fit-content;
    padding: 14px 16px;
    cursor: pointer;

    background-color: ${({ theme }) => theme.semantic.color.bgBasicDefault};
    color: ${({ theme }) =>
      $isSelected ? theme.semantic.color.textBasicPrimary : theme.semantic.color.textBasicTertiary};
  `;
};

export const StyledScrollableTab = styled.button<{ $isSelected: boolean }>`
  ${({ $isSelected }) => getDefaultTabStyle($isSelected)}

  text-decoration: ${({ $isSelected }) => ($isSelected ? 'underline' : 'none')};
  text-decoration-thickness: 2px;
  text-underline-offset: 19px;
  text-decoration-color: ${({ theme }) => theme.semantic.color.bgBasicBlack};

  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.semantic.color.lineBasicLight};
`;

export const StyledFixedTab = styled.button<{ $isSelected: boolean }>`
  flex-grow: 1;
  ${({ $isSelected }) => getDefaultTabStyle($isSelected)}

  border-bottom: ${({ $isSelected }) => ($isSelected ? '2px solid' : '1px solid')};
  border-bottom-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.semantic.color.bgBasicBlack : theme.semantic.color.lineBasicLight};
`;
