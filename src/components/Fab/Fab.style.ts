import styled, { css } from 'styled-components';

import { FabHierarchy, FabSize } from './Fab.type';

interface StyledFabProps {
  $size: FabSize;
  $hierarchy: FabHierarchy;
}

const hierarchyStyles = css<StyledFabProps>`
  ${({ theme, $hierarchy }) => {
    const { color, effect } = theme.semantic;
    switch ($hierarchy) {
      case 'primary':
        return css`
          background-color: ${color.buttonFabPrimaryEnabled};
          color: ${color.iconBasicWhite};
          box-shadow: ${effect.fabPrimaryShadow};
          &:hover {
            background-color: ${color.buttonFabPrimaryPressed};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${color.buttonFabSecondaryEnabled};
          color: ${color.iconBasicTertiary};
          box-shadow: ${effect.fabSecondaryShadow};
          &:hover {
            background-color: ${color.buttonFabSecondaryPressed};
          }
        `;
    }
  }}
`;

const sizeStyles = css<StyledFabProps>`
  ${({ $size }) => {
    switch ($size) {
      case 'large':
        return css`
          width: 56px;
          height: 56px;
          border-radius: 180px;
          svg {
            width: 24px;
            height: 24px;
          }
        `;
      case 'small':
        return css`
          width: 40px;
          height: 40px;
          border-radius: 180px;
          svg {
            width: 24px;
            height: 24px;
          }
        `;
    }
  }}
`;

const disabledStyles = css<StyledFabProps>`
  ${({ theme, $hierarchy }) => {
    const { color } = theme.semantic;
    switch ($hierarchy) {
      case 'primary':
        return css`
          background-color: ${color.buttonFabPrimaryDisabled};
          color: ${color.iconBasicWhite};
        `;
      case 'secondary':
        return css`
          background-color: ${color.buttonFabSecondaryDisabled};
          color: ${color.iconBasicDisabled};
          border: 1px solid ${color.lineBasicLight};
        `;
    }
  }}
`;

export const StyledFab = styled.button<StyledFabProps>`
  position: fixed;
  bottom: 32px;
  right: 16px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: none;

  ${hierarchyStyles}
  ${sizeStyles}

  &:disabled {
    ${disabledStyles}
    box-shadow: none;
    cursor: not-allowed;
  }
`;
