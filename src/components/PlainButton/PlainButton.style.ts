import { css, styled } from 'styled-components';

import { typos } from '@/style';

import { PlainButtonProps, PlainButtonSize } from './PlainButton.type';

interface StyledPlainButtonProps {
  $size: PlainButtonSize;
  $isPointed: PlainButtonProps['isPointed'];
  $isWarned: PlainButtonProps['isWarned'];
}

const getSizeStyle = ($size: PlainButtonSize) => {
  switch ($size) {
    case 'large':
      return css`
        height: 24px;
        .icon {
          width: 24px;
          height: 24px;
        }
      `;
    case 'medium':
      return css`
        height: 20px;
        font-size: 14px;
        ${typos.button3}
        .icon {
          width: 20px;
          height: 20px;
        }
      `;
    case 'small':
      return css`
        height: 16px;
        font-size: 12px;
        ${typos.button4}
        .icon {
          width: 16px;
          height: 16px;
        }
      `;
  }
};

const getStyle = ($isPointed: boolean, $isWarned: boolean) => {
  if ($isWarned) {
    return css`
      color: ${(props) => props.theme.color.buttonWarned};
      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.color.buttonWarnedPressed};
      }
    `;
  } else if ($isPointed) {
    return css`
      color: ${(props) => props.theme.color.buttonPoint};
      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.color.buttonPointPressed};
      }
    `;
  } else
    return css`
      color: ${(props) => props.theme.color.buttonNormal};
      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.color.buttonNormalPressed};
      }
    `;
};

export const StyledPlainButton = styled.button<StyledPlainButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  gap: 2px;
  ${({ $size }) => getSizeStyle($size)}
  ${({ $isPointed, $isWarned }) => getStyle($isPointed, $isWarned)}
  &:disabled {
    color: ${({ theme }) => theme.color.buttonDisabled};
    cursor: not-allowed;
  }
`;
