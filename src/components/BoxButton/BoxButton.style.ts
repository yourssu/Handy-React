import { css, styled } from 'styled-components';

import { typos } from '@/style';

import {
  BoxButtonProps,
  isDisabled,
  isWarned,
  rounding,
  size,
  theme,
  types,
} from './BoxButton.type';

interface styledBoxButtonProps {
  $size: size;
  $types: types;
  $theme: theme;
  $isWarned: isWarned;
  $rounding: rounding;
  $isDisabled: isDisabled;
}

const getNormalStyle = (
  $types: styledBoxButtonProps['$types'],
  $theme: styledBoxButtonProps['$theme']
) => {
  switch ($types) {
    case 'filled':
      return css`
        background-color: ${$theme.color.buttonPoint};
        color: ${$theme.color.buttonBright};
        border: none;
        &:hover {
          cursor: pointer;
          background-color: ${$theme.color.buttonPointPressed};
        }
      `;
    case 'tinted':
      return css`
        background-color: ${$theme.color.buttonPointBG};
        color: ${$theme.color.buttonPoint};
        border: none;
        &:hover {
          cursor: pointer;
          color: ${$theme.color.buttonPointPressed};
        }
      `;
    case 'line':
      return css`
        background-color: transparent;
        color: ${$theme.color.buttonPoint};
        border: 1px solid ${$theme.color.buttonPoint};
        &:hover {
          cursor: pointer;
          color: ${$theme.color.buttonPointPressed};
          border: 1px solid ${$theme.color.buttonPointPressed};
        }
      `;
  }
};

const getDisabledStyle = (
  $types: styledBoxButtonProps['$types'],
  $theme: styledBoxButtonProps['$theme']
) => {
  switch ($types) {
    case 'filled':
      return css`
        background-color: ${$theme.color.buttonDisabledBG};
        color: ${$theme.color.buttonDisabled};
        border: none;
      `;
    case 'tinted':
      return css`
        background-color: ${$theme.color.buttonDisabledBG};
        color: ${$theme.color.buttonDisabled};
        border: none;
      `;
    case 'line':
      return css`
        background-color: transparent;
        color: ${$theme.color.buttonDisabled};
        border: 1px solid ${$theme.color.buttonDisabled};
      `;
  }
};

const getWarnedStyle = (
  $types: styledBoxButtonProps['$types'],
  $theme: styledBoxButtonProps['$theme']
) => {
  switch ($types) {
    case 'filled':
      return css`
        background-color: ${$theme.color.buttonWarned};
        color: ${$theme.color.buttonBright};
        border: none;
        &:hover {
          cursor: pointer;
          background-color: ${$theme.color.buttonWarnedPressed};
        }
      `;
    case 'tinted':
      return css`
        background-color: ${$theme.color.buttonWarnedBG};
        color: ${$theme.color.buttonWarned};
        border: none;
        &:hover {
          cursor: pointer;
          color: ${$theme.color.buttonWarnedPressed};
        }
      `;
    case 'line':
      return css`
        background-color: transparent;
        color: ${$theme.color.buttonWarned};
        border: 1px solid ${$theme.color.buttonWarned};
        &:hover {
          cursor: pointer;
          color: ${$theme.color.buttonWarnedPressed};
          border: 1px solid ${$theme.color.buttonWarnedPressed};
        }
      `;
  }
};

const getSizeStyle = ($size: styledBoxButtonProps['$size']) => {
  switch ($size) {
    case 'extraLarge':
      return css`
        width: 300px;
        height: 56px;
        ${typos.button1}
      `;
    case 'large':
      return css`
        width: 300px;
        height: 48px;
        ${typos.button2}
      `;
    case 'medium':
      return css`
        width: 300px;
        height: 40px;
        ${typos.button2}
      `;
    case 'small':
      return css`
        width: 300px;
        height: 32px;
        ${typos.button4}
      `;
  }
};

export const Button = styled.button<BoxButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  gap: 4px;
  border-radius: ${({ rounding }) => rounding}px;
  ${(props) => getSizeStyle(props.size)}
  ${(props) => getNormalStyle(props.types, props.theme)}
  ${(props) => props.isWarned && getWarnedStyle(props.types, props.theme)}
  &:disabled {
    ${(props) => getDisabledStyle(props.types, props.theme)}
  }
`;
