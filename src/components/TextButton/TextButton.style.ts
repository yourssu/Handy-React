import { css, styled } from 'styled-components';

import { TextButtonProps, TextButtonSize, TextButtonVariant } from './TextButton.type';

interface StyledTextButtonProps {
  $size: TextButtonSize;
  $variant: TextButtonVariant;
  $width?: TextButtonProps['width'];
}

const getVariantStyle = ($variant: TextButtonVariant) => {
  switch ($variant) {
    case 'textPrimary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonTextPrimaryEnabled};
        color: ${({ theme }) => theme.semantic.color.textBrandPrimary};
        border: none;

        svg {
          fill: ${({ theme }) => theme.semantic.color.iconBrandPrimary};
        }

        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.semantic.color.buttonTextPrimaryPressed};
        }
      `;
    case 'textSecondary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonTextSecondaryEnabled};
        color: ${({ theme }) => theme.semantic.color.textBasicTertiary};
        border: none;

        svg {
          fill: ${({ theme }) => theme.semantic.color.iconBasicTertiary};
        }

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
        padding: 0px 8px;
        ${({ theme }) => theme.typo.B3_Sb_14}
        svg {
          width: 16px;
          height: 16px;
        }
      `;
    case 'xsmall':
      return css`
        height: 28px;
        padding: 0px 6px;
        ${({ theme }) => theme.typo.C2_Sb_12}
        svg {
          width: 12px;
          height: 12px;
        }
      `;
  }
};

const getDisabledStyle = ($variant: TextButtonVariant) => {
  switch ($variant) {
    case 'textPrimary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonTextPrimaryDisabled};
      `;
    case 'textSecondary':
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

  ${({ $variant }) => getVariantStyle($variant)}
  ${({ $size }) => getSizeStyle($size)}
  border-radius: ${({ theme }) => theme.semantic.radius.xs}px;
  min-width: fit-content;
  width: ${({ $width }) => $width};

  &:disabled {
    ${({ $variant }) => getDisabledStyle($variant)}
    color: ${({ theme }) => theme.semantic.color.textBasicDisabled};
    cursor: not-allowed;

    svg {
      fill: ${({ theme }) => theme.semantic.color.iconBasicDisabledStrong};
    }
  }
`;
