import { css, styled } from 'styled-components';

export const StyledList = styled.div<{ $scrollable: boolean }>`
  display: flex;
  width: ${({ $scrollable }) => ($scrollable ? 'fit-content' : '100%')};
`;

const getDefaultTabStyle = ($isSelected: boolean) => {
  return css`
    border: none;
    padding: 14px 16px;
    cursor: pointer;
    ${({ theme }) => theme.typo.B1_Sb_16};

    background-color: ${({ theme }) => theme.semantic.color.bgBasicDefault};
    color: ${({ theme }) =>
      $isSelected ? theme.semantic.color.textBasicPrimary : theme.semantic.color.textBasicTertiary};
  `;
};

export const StyledScrollableTab = styled.button<{ $isSelected: boolean }>`
  width: fit-content;
  ${({ $isSelected }) => getDefaultTabStyle($isSelected)}

  text-decoration: ${({ $isSelected }) => ($isSelected ? 'underline' : 'none')};
  text-decoration-thickness: 2px;
  text-underline-offset: 21px;
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
