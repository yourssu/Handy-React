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
        font-size: 14px;
        .icon {
          width: 24px;
          height: 24px;
        }
      `;
    case 'medium':
      return css`
        height: 20px;
        font-size: 14px;
        .icon {
          width: 20px;
          height: 20px;
        }
      `;
    case 'small':
      return css`
        height: 16px;
        font-size: 12px;
        .icon {
          width: 16px;
          height: 16px;
        }
        .icon-padding {
          padding-right: 4px;
        }
      `;
  }
};

export const StyledCheckBoxWrapper = styled.div<StyledCheckBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  input[type='checkbox'] {
    display: none;
  }

  .icon-padding {
    padding-right: 8px;
  }

  input:disabled + .label {
    ${({ $size }) =>
      $size === 'small' &&
      css`
        ${typos.button4}
      `}
  }

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
