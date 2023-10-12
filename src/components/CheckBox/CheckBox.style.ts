import { css, styled } from 'styled-components';

import { typos } from '@/style';

import { CheckBoxProps, CheckBoxSize } from './CheckBox.type';

interface StyledCheckBoxProps {
  $size: CheckBoxSize;
  $isDisabled: CheckBoxProps['isDisabled'];
  $isSelected: CheckBoxProps['isSelected'];
}

const getSizeStyle = ($size: CheckBoxSize) => {
  switch ($size) {
    case 'large':
      return css`
        height: 24px;
        gap: 8px;
        .checkbox-icon {
          width: 24px;
          height: 24px;
        }
      `;
    case 'medium':
      return css`
        height: 20px;
        gap: 8px;
        .checkbox-icon {
          width: 20px;
          height: 20px;
        }
      `;
    case 'small':
      return css`
        height: 16px;
        gap: 4px;
        .checkbox-icon {
          width: 16px;
          height: 16px;
        }
      `;
  }
};

export const StyledCheckBoxWrapper = styled.div<StyledCheckBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  ${typos.button3}

  cursor: pointer;
  label {
    cursor: pointer;
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;
      label {
        cursor: not-allowed;
      }
    `}

  ${({ $isDisabled, $size }) =>
    $isDisabled &&
    $size === 'small' &&
    css`
      ${typos.button4}
    `}

  ${({ $isSelected, $isDisabled, theme }) =>
    $isSelected
      ? css`
          color: ${$isDisabled ? theme.color.buttonDisabled : theme.color.buttonPoint};
        `
      : css`
          color: ${$isDisabled ? theme.color.buttonDisabled : theme.color.buttonNormal};
        `}

  ${({ $size }) => getSizeStyle($size)}
`;
