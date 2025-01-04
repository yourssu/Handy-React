import { styled } from 'styled-components';

import { TextareaProps } from './Textarea.type';

interface StyledTextareaProps {
  $width?: TextareaProps['width'];
  $height?: TextareaProps['height'];
  $error?: TextareaProps['error'];
  $isFocused?: boolean;
}

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledTextareaWrapper = styled.div<StyledTextareaProps>`
  width: ${({ $width }) => $width ?? '100%'};
  height: ${({ $height }) => $height ?? 'auto'};
  padding: 16px;
  background-color: ${({ theme }) => theme.semantic.color.bgBasicLight};
  border: ${({ theme, $error }) =>
    $error ? `1px solid ${theme.semantic.color.lineStatusNegative}` : 'none'};
  border-radius: ${({ theme }) => theme.semantic.radius.s}px;
  box-sizing: border-box;
  border: ${({ theme, $error, $isFocused }) =>
    $error
      ? `1px solid ${theme.semantic.color.lineStatusNegative}`
      : $isFocused
        ? `1px solid ${theme.semantic.color.lineStatusPositive}`
        : 'none'};
`;

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  width: 100%;
  height: 100%;
  padding-right: 6px;
  resize: none;
  ${({ theme }) => theme.typo.B3_Rg_14}

  box-sizing: border-box;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.semantic.color.textBasicPrimary};

  caret-color: ${({ theme, $error }) =>
    $error ? theme.semantic.color.lineStatusNegative : theme.semantic.color.lineStatusPositive};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.semantic.color.textBasicTertiary};
  }

  &:disabled {
    background-color: transparent;
    cursor: not-allowed;

    &::placeholder {
      color: ${({ theme }) => theme.semantic.color.textBasicDisabled};
    }
  }

  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.semantic.color.lineBasicMedium};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.semantic.color.lineBasicStrong};
  }
`;

export const StyledHelperText = styled.div<StyledTextareaProps>`
  margin-left: 4px;
  ${({ theme }) => theme.typo.C2_Rg_12}
  color: ${({ theme, $error }) =>
    $error ? theme.semantic.color.textStatusNegative : theme.semantic.color.textBasicTertiary};
`;
