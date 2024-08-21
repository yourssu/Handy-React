import { styled } from 'styled-components';

import { TextareaProps } from './Textarea.type';

interface StyledTextareaProps {
  $width?: TextareaProps['width'];
  $height?: TextareaProps['height'];
  $error?: TextareaProps['error'];
}

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 16px;
  ${({ theme }) => theme.typo.B3_Rg_14}
  resize: none;

  box-sizing: border-box;
  border: ${({ theme, $error }) =>
    $error ? `1px solid ${theme.semantic.color.textStatusNegative}` : 'none'};
  border-radius: ${({ theme }) => theme.semantic.radius.m}px;
  background-color: ${({ theme }) => theme.semantic.color.bgBasicLight};
  color: ${({ theme }) => theme.semantic.color.textBasicPrimary};

  caret-color: ${({ theme, $error }) =>
    $error ? theme.semantic.color.textStatusNegative : theme.semantic.color.textBasicTertiary};

  outline-color: ${({ theme }) => theme.semantic.color.lineStatusPositive};
  outline-width: 1px;

  &::placeholder {
    color: ${({ theme }) => theme.semantic.color.textBasicTertiary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.semantic.color.bgBasicLight};
    cursor: not-allowed;

    &::placeholder {
      color: ${({ theme }) => theme.semantic.color.textBasicDisabled};
    }
  }
`;

export const StyledHelperText = styled.div<StyledTextareaProps>`
  margin-left: 4px;
  ${({ theme }) => theme.typo.C2_Rg_12}
  color: ${({ theme, $error }) =>
    $error ? theme.semantic.color.textStatusNegative : theme.semantic.color.textBasicTertiary};
`;
