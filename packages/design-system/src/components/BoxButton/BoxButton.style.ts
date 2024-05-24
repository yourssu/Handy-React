import { css, styled } from 'styled-components';

import {
  BoxButtonProps,
  BoxButtonRounding,
  BoxButtonSize,
  BoxButtonVariant,
} from './BoxButton.type';

interface StyledBoxButtonProps {
  $size: BoxButtonSize;
  $variant: BoxButtonVariant;
  $rounding?: BoxButtonRounding;
  $isWarned?: BoxButtonProps['isWarned'];
  $width?: BoxButtonProps['width'];
}

const getNormalStyle = ($variant: BoxButtonVariant) => {
  switch ($variant) {
    case 'filled':
      return css`
        background-color: ${(props) => props.theme.color.buttonPoint};
        color: ${(props) => props.theme.color.buttonBright};
        border: none;
        &:hover {
          cursor: pointer;
          background-color: ${(props) => props.theme.color.buttonPointPressed};
        }
      `;
    case 'tinted':
      return css`
        background-color: ${(props) => props.theme.color.buttonPointBG};
        color: ${(props) => props.theme.color.buttonPoint};
        border: none;
        &:hover {
          cursor: pointer;
          color: ${(props) => props.theme.color.buttonPointPressed};
        }
      `;
    case 'line':
      return css`
        background-color: transparent;
        color: ${(props) => props.theme.color.buttonPoint};
        border: 1px solid ${(props) => props.theme.color.buttonPoint};
        &:hover {
          cursor: pointer;
          color: ${(props) => props.theme.color.buttonPointPressed};
          border: 1px solid ${(props) => props.theme.color.buttonPointPressed};
        }
      `;
  }
};

const getDisabledStyle = ($variant: BoxButtonVariant) => {
  switch ($variant) {
    case 'filled':
      return css`
        background-color: ${(props) => props.theme.color.buttonDisabledBG};
        color: ${(props) => props.theme.color.buttonDisabled};
        border: none;
      `;
    case 'tinted':
      return css`
        background-color: ${(props) => props.theme.color.buttonDisabledBG};
        color: ${(props) => props.theme.color.buttonDisabled};
        border: none;
      `;
    case 'line':
      return css`
        background-color: transparent;
        color: ${(props) => props.theme.color.buttonDisabled};
        border: 1px solid ${(props) => props.theme.color.buttonDisabled};
      `;
  }
};

const getWarnedStyle = ($variant: BoxButtonVariant) => {
  switch ($variant) {
    case 'filled':
      return css`
        background-color: ${(props) => props.theme.color.buttonWarned};
        color: ${(props) => props.theme.color.buttonBright};
        border: none;
        &:hover {
          cursor: pointer;
          background-color: ${(props) => props.theme.color.buttonWarnedPressed};
        }
      `;
    case 'tinted':
      return css`
        background-color: ${(props) => props.theme.color.buttonWarnedBG};
        color: ${(props) => props.theme.color.buttonWarned};
        border: none;
        &:hover {
          cursor: pointer;
          color: ${(props) => props.theme.color.buttonWarnedPressed};
        }
      `;
    case 'line':
      return css`
        background-color: transparent;
        color: ${(props) => props.theme.color.buttonWarned};
        border: 1px solid ${(props) => props.theme.color.buttonWarned};
        &:hover {
          cursor: pointer;
          color: ${(props) => props.theme.color.buttonWarnedPressed};
          border: 1px solid ${(props) => props.theme.color.buttonWarnedPressed};
        }
      `;
  }
};

const getSizeStyle = ($size: BoxButtonSize) => {
  switch ($size) {
    case 'extraLarge':
      return css`
        height: 56px;
        ${({ theme }) => theme.typo.button1}
      `;
    case 'large':
      return css`
        height: 48px;
        ${({ theme }) => theme.typo.button2}
      `;
    case 'medium':
      return css`
        height: 40px;
        ${({ theme }) => theme.typo.button2}
      `;
    case 'small':
      return css`
        height: 32px;
        ${({ theme }) => theme.typo.button4}
      `;
  }
};

export const StyledBoxButton = styled.button<StyledBoxButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  gap: 4px;
  border-radius: ${({ $rounding }) => $rounding}px;
  width: ${({ $width }) => $width};
  ${({ $size }) => getSizeStyle($size)}
  ${({ $variant }) => getNormalStyle($variant)}
  ${({ $isWarned, $variant }) => $isWarned && getWarnedStyle($variant)}
  &:disabled {
    ${({ $variant }) => getDisabledStyle($variant)}
    cursor: not-allowed;
  }
  & > .boxButton-child {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
