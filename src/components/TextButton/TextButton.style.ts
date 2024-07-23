import { css, styled } from 'styled-components';

import { TextButtonProps, TextButtonSize, TextButtonHierarchy } from './TextButton.type';

interface StyledTextButtonProps {
  $size: TextButtonSize;
  $hierarchy: TextButtonHierarchy;
  $width?: TextButtonProps['width'];
}

const getHierarchyStyle = ($hierarchy: TextButtonHierarchy) => {
  switch ($hierarchy) {
    case 'primary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonTextPrimaryEnabled};
        color: ${({ theme }) => theme.semantic.color.textBrandPrimary};
        border: none;
        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.semantic.color.buttonTextPrimaryPressed};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonTextSecondaryEnabled};
        color: ${({ theme }) => theme.semantic.color.textBasicTertiary};
        border: none;
        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.semantic.color.buttonTextSecondaryPressed};
        }
      `;
  }
};

const getSizeStyle = ($size: TextButtonSize) => {
  switch ($size) {
    case 'medium':
      return css`
        height: 36px;
        padding: 0 8px;
        ${({ theme }) => theme.typo.B3_Sb_14}
        svg {
          width: 20px;
          height: 20px;
        }
      `;
    case 'small':
      return css`
        height: 32px;
        ${({ theme }) => theme.typo.B3_Sb_14}
        svg {
          width: 16px;
          height: 16px;
        }
      `;
    case 'xsmall':
      return css`
        height: 28px;
        ${({ theme }) => theme.typo.C2_Sb_12}
        svg {
          width: 12px;
          height: 12px;
        }
      `;
  }
};

const getDisabledStyle = ($hierarchy: TextButtonHierarchy) => {
  switch ($hierarchy) {
    case 'primary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonTextPrimaryDisabled};
      `;
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonTextSecondaryDisabled};
      `;
  }
};

export const StyledTextButton = styled.button<StyledTextButtonProps>`
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

  & > .textButton-child {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
