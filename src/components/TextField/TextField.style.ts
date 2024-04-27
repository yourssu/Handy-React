import { css, styled } from 'styled-components';

import { TextFieldProps } from './TextField.type';

interface StyledTextFieldProps {
  $isNegative?: TextFieldProps['isNegative'];
  $isPositive?: TextFieldProps['isPositive'];
  $isFocused?: TextFieldProps['isFocused'];
  $isTyping?: TextFieldProps['isTyping'];
  $isDisabled?: TextFieldProps['disabled'];
  $searchPrefix?: TextFieldProps['searchPrefix'];
  $width?: TextFieldProps['width'];
}

export const StyledTextFieldWrapper = styled.div<StyledTextFieldProps>`
  width: ${({ $width }) => $width};
  height: 46px;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.color.inputFieldElevated};
  border: 1px solid ${({ theme }) => theme.color.inputFieldElevated};
  border-radius: 8px;
  user-select: none;

  margin: 8px 0 0 0;
  padding: 12px 16px;
  gap: 4px;

  .suffix-icon {
    visibility: hidden;
    cursor: pointer;
  }

  input:focus + .suffix-icon,
  input:active + .suffix-icon {
    visibility: visible;
    display: flex;
    align-items: center;
  }

  ${({ $isDisabled, $isPositive, $isNegative, theme }) =>
    !$isDisabled &&
    ($isNegative
      ? css`
          border: 1px solid ${theme.color.textWarned};
        `
      : $isPositive &&
        css`
          border: 1px solid ${theme.color.textPointed};
        `)}

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      input:focus + .suffix-icon,
      input:active + .suffix-icon {
        display: none;
      }
    `}
`;

export const StyledTextField = styled.input<StyledTextFieldProps>`
  width: 100%;
  margin-left: ${({ $searchPrefix }) => $searchPrefix && '4px'};

  background-color: transparent;
  border: none;
  outline: none;
  ${({ theme }) => theme.typo.body2};

  caret-color: ${({ theme }) => theme.color.textPointed};

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.textDisabled};
  }

  &::placeholder {
    color: ${({ theme, disabled }) =>
      disabled ? theme.color.textDisabled : theme.color.textTertiary};
  }

  &::-ms-reveal {
    display: none;
  }
`;

export const StyledSuffixText = styled.span<StyledTextFieldProps>`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme, $isDisabled }) =>
    $isDisabled ? theme.color.textDisabled : theme.color.textTertiary};
`;

export const StyledFieldLabel = styled.label<StyledTextFieldProps>`
  ${({ theme }) => theme.typo.subtitle6};
  color: ${({ theme, $isDisabled }) =>
    $isDisabled ? theme.color.textDisabled : theme.color.textSecondary};
`;

export const StyledHelperLabel = styled.div<StyledTextFieldProps>`
  ${({ theme }) => theme.typo.caption1};
  width: 100%;
  padding: 8px 0 0 8px;
  word-break: break-all;

  color: ${({ $isDisabled, theme }) =>
    $isDisabled ? theme.color.textDisabled : theme.color.textTertiary};

  ${({ $isDisabled, $isNegative, theme }) =>
    !$isDisabled &&
    $isNegative &&
    css`
      color: ${theme.color.textWarned};
    `};
`;
