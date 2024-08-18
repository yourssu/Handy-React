import { css, styled } from 'styled-components';

import {
  RadioGroupSizeType,
  RadioGroupOrientationType,
} from '@/components/RadioGroup/RadioGroup.type';

interface StyledRadioGroupFieldsetProps {
  $orientation: RadioGroupOrientationType;
}

interface StyledRadioItemProps {
  $size: RadioGroupSizeType;
}

const getRadioInnerStyle = ($size: RadioGroupSizeType) => {
  switch ($size) {
    case 'small':
      return css`
        width: 9.5px;
        height: 9.5px;
      `;
    case 'medium':
      return css`
        width: 12px;
        height: 12px;
      `;
    case 'large':
      return css`
        width: 14px;
        height: 14px;
      `;
    default:
      return '';
  }
};

const getRadioButtonStyle = ($size: RadioGroupSizeType) => {
  switch ($size) {
    case 'small':
      return css`
        width: 16px;
        height: 16px;
        border-width: 1px;
      `;
    case 'medium':
      return css`
        width: 20px;
        height: 20px;
        border-width: 1.25px;
      `;
    case 'large':
      return css`
        width: 24px;
        height: 24px;
        border-width: 1.5px;
      `;
    default:
      return '';
  }
};

const getDisabledRadioButtonStyle = ($size: RadioGroupSizeType) => {
  switch ($size) {
    case 'small':
      return css`
        border-width: 3.25px;
      `;
    case 'medium':
      return css`
        border-width: 4px;
      `;
    case 'large':
      return css`
        border-width: 5px;
      `;
    default:
      return '';
  }
};

export const StyledRadioGroupFieldset = styled.fieldset<StyledRadioGroupFieldsetProps>`
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;

  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ $orientation }) => ($orientation === 'horizontal' ? 'row' : 'column')};
  gap: 16px;
`;

export const StyledRadioItemLabel = styled.label<StyledRadioItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  input[type='radio'] {
    appearance: none;
    outline: 0;
    position: absolute;
    width: 0;
    height: 0;
  }

  &:has([type='radio']:disabled) {
    cursor: not-allowed;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ $size }) => getRadioButtonStyle($size)}
    border-style: solid;
    border-color: ${({ theme }) => theme.semantic.color.lineBasicMedium};
    border-radius: 50%;
    background-color: transparent;

    pointer-events: none;

    &:focus {
      outline: 1px solid black;
    }
  }

  [data-radio-content='true'] {
    color: ${({ theme }) => theme.semantic.color.textBasicSecondary};
    ${({ $size, theme }) => $size === 'small' && theme.typo.C2_Rg_12}
    ${({ $size, theme }) => $size === 'medium' && theme.typo.B3_Rg_14}
    ${({ $size, theme }) => $size === 'large' && theme.typo.B1_Rg_16}
  }

  input[type='radio']:checked ~ button {
    border-color: ${({ theme }) => theme.semantic.color.lineBrandPrimary};
  }

  input[type='radio']:checked ~ [data-radio-content='true'] {
    color: ${({ theme }) => theme.semantic.color.textBasicPrimary};
  }

  input[type='radio']:disabled ~ button {
    border-color: ${({ theme }) => theme.semantic.color.lineBasicMedium};
    ${({ $size }) => getDisabledRadioButtonStyle($size)}
  }

  input[type='radio']:disabled ~ [data-radio-content='true'] {
    color: ${({ theme }) => theme.semantic.color.textBasicDisabled};
  }

  .inner {
    ${({ $size }) => getRadioInnerStyle($size)}

    border-radius: 50%;
    background-color: ${({ theme }) => theme.semantic.color.buttonRadioUnselected};
  }

  input[type='radio']:checked ~ button .inner {
    background-color: ${({ theme }) => theme.semantic.color.buttonRadioSelected};
  }

  input[type='radio']:disabled ~ button .inner {
    opacity: 0;
    visibility: hidden;
  }
`;
