import { styled } from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5px;
`;

export const StyledButton = styled.button<{ $isSelected?: boolean }>`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.semantic.color.textBrandPrimary : theme.semantic.color.textBasicTertiary};

  border-radius: ${({ theme }) => theme.semantic.radius.s}px;
  border: none;

  ${({ theme }) => theme.typo.B3_Sb_14}
  cursor: pointer;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.semantic.color.paginationBrandPressed};
  }

  &:disabled {
    color: ${({ theme }) => theme.semantic.color.iconBasicDisabled};
    cursor: not-allowed;
  }
`;
