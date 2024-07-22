import { css, styled } from 'styled-components';

import { BoxButtonProps, BoxButtonSize, BoxButtonHierarchy } from './BoxButton.type';

interface StyledBoxButtonProps {
  $size: BoxButtonSize;
  $hierarchy: BoxButtonHierarchy;
  $width?: BoxButtonProps['width'];
}

const getHierarchyStyle = ($hierarchy: BoxButtonHierarchy) => {
  switch ($hierarchy) {
    case 'primary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonBoxPrimaryEnabled};
        color: ${({ theme }) => theme.semantic.color.textBasicWhite};
        border: none;
        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.semantic.color.buttonBoxPrimaryPressed};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonBoxSecondaryEnabled};
        color: ${({ theme }) => theme.semantic.color.textBrandSecondary};
        border: none;
        &:hover {
          cursor: pointer;
          color: ${({ theme }) => theme.semantic.color.buttonBoxSecondaryPressed};
        }
      `;
    case 'tertiary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonBoxTertiaryEnabled};
        color: ${({ theme }) => theme.semantic.color.textBasicPrimary};
        border: 1px solid ${({ theme }) => theme.semantic.color.lineBasicMedium};
        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.semantic.color.buttonBoxTertiaryPressed};
        }
      `;
  }
};

const getSizeStyle = ($size: BoxButtonSize) => {
  switch ($size) {
    case 'xlarge':
      return css`
        height: 56px;
        border-radius: ${({ theme }) => theme.semantic.radius.xl}px;
        padding: 0 20px;
        ${({ theme }) => theme.typo.B1_Sb_16}
      `;
    case 'large':
      return css`
        height: 52px;
        border-radius: ${({ theme }) => theme.semantic.radius.xl}px;
        padding: 0 20px;
        ${({ theme }) => theme.typo.B1_Sb_16}
      `;
    case 'medium':
      return css`
        height: 48px;
        border-radius: ${({ theme }) => theme.semantic.radius.l}px;
        padding: 0 16px;
        ${({ theme }) => theme.typo.B1_Sb_16}
      `;
    case 'small':
      return css`
        height: 40px;
        border-radius: ${({ theme }) => theme.semantic.radius.m}px;
        padding: 0 16px;
        ${({ theme }) => theme.typo.B3_Sb_14}
      `;
    case 'xsmall':
      return css`
        height: 32px;
        border-radius: ${({ theme }) => theme.semantic.radius.s}px;
        padding: 0 8px;
        ${({ theme }) => theme.typo.C2_Sb_12}
      `;
    case 'xxsmall':
      return css`
        height: 24px;
        border-radius: ${({ theme }) => theme.semantic.radius.xs}px;
        padding: 0 8px;
        ${({ theme }) => theme.typo.C2_Sb_12}
      `;
  }
};

const getDisabledStyle = ($hierarchy: BoxButtonHierarchy) => {
  switch ($hierarchy) {
    case 'primary':
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonBoxPrimaryDisabled};
        border: none;
      `;
    case 'tertiary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonBoxTertiaryDisabled};
        border: 1px solid ${({ theme }) => theme.semantic.color.lineBasicMedium};
      `;
  }
};

export const StyledBoxButton = styled.button<StyledBoxButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  ${({ $hierarchy }) => getHierarchyStyle($hierarchy)}
  ${({ $size }) => getSizeStyle($size)}
  width: ${({ $width }) => $width};

  &:disabled {
    ${({ $hierarchy }) => getDisabledStyle($hierarchy)}
    color: ${({ theme }) => theme.semantic.color.textBasicDisabled};
    cursor: not-allowed;
  }

  & > .boxButton-child {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
