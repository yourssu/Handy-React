import { css, styled } from 'styled-components';

import { BoxButtonProps, BoxButtonSize, BoxButtonHierarchy } from './BoxButton.type';

// TODO: import radius

interface StyledBoxButtonProps {
  $size: BoxButtonSize;
  $hierarchy: BoxButtonHierarchy;
  $width?: BoxButtonProps['width'];
}

const getHierarchyStyle = ($hierarchy: BoxButtonHierarchy) => {
  switch ($hierarchy) {
    case 'primary':
      return css`
        background-color: ${({ theme }) => theme.color.buttonBoxPrimaryEnabled};
        color: ${({ theme }) => theme.color.textBasicWhite};
        border: none;
        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.color.buttonBoxPrimaryPressed};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.color.buttonBoxSecondaryEnabled};
        color: ${({ theme }) => theme.color.textBrandSecondary};
        border: none;
        &:hover {
          cursor: pointer;
          color: ${({ theme }) => theme.color.buttonBoxSecondaryPressed};
        }
      `;
    case 'tertiary':
      return css`
        background-color: ${({ theme }) => theme.color.buttonBoxTertiaryEnabled};
        color: ${({ theme }) => theme.color.textBasicPrimary};
        border: 1px solid ${({ theme }) => theme.color.lineBasicMedium};
        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.color.buttonBoxTertiaryPressed};
        }
      `;
  }
};

const getSizeStyle = ($size: BoxButtonSize) => {
  switch ($size) {
    case 'xlarge':
      return css`
        height: 56px;
        border-radius: radius.xl;
        padding: 0 20px;
        ${({ theme }) => theme.typo.B1_Sb_16}
      `;
    case 'large':
      return css`
        height: 52px;
        border-radius: radius.xl;
        padding: 0 20px;
        ${({ theme }) => theme.typo.B1_Sb_16}
      `;
    case 'medium':
      return css`
        height: 48px;
        border-radius: radius.l;
        padding: 0 16px;
        ${({ theme }) => theme.typo.B1_Sb_16}
      `;
    case 'small':
      return css`
        height: 40px;
        border-radius: radius.m;
        padding: 0 16px;
        ${({ theme }) => theme.typo.B3_Sb_14}
      `;
    case 'xsmall':
      return css`
        height: 32px;
        border-radius: radius.s;
        padding: 0 8px;
        ${({ theme }) => theme.typo.C2_Sb_12}
      `;
    case 'xxsmall':
      return css`
        height: 24px;
        border-radius: radius.xs;
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
        background-color: ${({ theme }) => theme.color.buttonBoxPrimaryDisabled};
        border: none;
      `;
    case 'tertiary':
      return css`
        background-color: ${({ theme }) => theme.color.buttonBoxTertiaryDisabled};
        border: 1px solid ${({ theme }) => theme.color.lineBasicMedium};
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
    color: ${({ theme }) => theme.color.textBasicDisabled};
    cursor: not-allowed;
  }

  & > .boxButton-child {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
