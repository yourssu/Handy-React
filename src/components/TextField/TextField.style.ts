import { styled } from 'styled-components';

export const StyledTextFieldContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledTextFieldInputContainer = styled.div`
  order: 1;

  position: relative;
  width: 100%;
`;

export const StyledTextFieldInput = styled.input<{ $isError: boolean }>`
  box-sizing: border-box;
  width: 100%;
  outline: 0;

  padding: 12px 16px;
  padding-right: calc(16px * 2 + 20px);
  background-color: ${({ theme }) => theme.semantic.color.bgBasicLight};

  border-width: ${({ $isError }) => ($isError ? 1 : 0)}px;
  border-style: solid;
  border-color: ${({ theme, $isError }) =>
    $isError ? theme.semantic.color.lineStatusNegative : theme.semantic.color.lineStatusPositive};
  border-radius: ${({ theme }) => theme.semantic.radius.m}px;

  caret-color: ${({ theme }) => theme.semantic.color.lineStatusPositive};

  ${({ theme }) => theme.typo.B1_Rg_16}
  color: ${({ theme }) => theme.semantic.color.textBasicPrimary};

  &::placeholder {
    ${({ theme }) => theme.typo.B1_Rg_16}
    color: ${({ theme }) => theme.semantic.color.textBasicTertiary};
  }

  &:focus {
    margin: -1px;
    border-width: 1px;
  }

  &:disabled,
  &:disabled::placeholder {
    color: ${({ theme }) => theme.semantic.color.textBasicDisabled};
    cursor: not-allowed;
  }
`;

export const StyledTextFieldLabel = styled.label`
  order: 0;

  ${({ theme }) => theme.typo.C2_Rg_12}
  color: ${({ theme }) => theme.semantic.color.textBasicTertiary};
`;

export const StyledTextFieldHelperText = styled.div<{ $isError: boolean }>`
  order: 2;

  ${({ theme }) => theme.typo.C2_Rg_12}
  color: ${({ theme, $isError }) =>
    $isError ? theme.semantic.color.lineStatusNegative : theme.semantic.color.textBasicTertiary};
`;

export const StyledClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;

  width: fit-content;
  height: fit-content;

  border: 0;
  border-radius: 50%;
  background-color: transparent;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.semantic.color.iconBasicTertiary};
  }
`;
