import { css, styled } from 'styled-components';

import { TextButtonProps, TextButtonSize, TextButtonHierarchy } from './TextButton.type';

// TODO: import radius

interface StyledTextButtonProps {
  $size: TextButtonSize;
  $hierarchy: TextButtonHierarchy;
  $width?: TextButtonProps['width'];
}

const getHierarchyStyle = ($hierarchy: TextButtonHierarchy) => {
  switch ($hierarchy) {
    case 'primary':
      return css`
        background-color: ${({ theme }) => theme.color.buttonTextPrimaryEnabled};
        color: ${({ theme }) => theme.color.textBrandPrimary};
        border: none;
        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.color.buttonTextPrimaryPressed};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.color.buttonTextSecondaryEnabled};
        color: ${({ theme }) => theme.color.textBasicTertiary};
        border: none;
        &:hover {
          cursor: pointer;
          color: ${({ theme }) => theme.color.buttonTextSecondaryPressed};
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
      `;
    case 'small':
      return css`
        height: 32px;
        ${({ theme }) => theme.typo.B3_Sb_14}
      `;
    case 'xsmall':
      return css`
        height: 28px;
        ${({ theme }) => theme.typo.C2_Sb_12}
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
    color: ${({ theme }) => theme.color.textBasicDisabled};
    cursor: not-allowed;
  }

  & > .textButton-child {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
