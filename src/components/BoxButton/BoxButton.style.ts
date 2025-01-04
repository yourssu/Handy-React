import { css, styled } from 'styled-components';

import { BoxButtonProps, BoxButtonSize, BoxButtonVariant } from './BoxButton.type';

interface StyledBoxButtonProps {
  $size: BoxButtonSize;
  $variant: BoxButtonVariant;
  $width?: BoxButtonProps['width'];
}

const getVariantStyle = ($variant: BoxButtonVariant) => {
  switch ($variant) {
    case 'filledPrimary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonFilledPrimaryEnabled};
        color: ${({ theme }) => theme.semantic.color.textBasicWhite};
        border: none;

        svg {
          fill: ${({ theme }) => theme.semantic.color.iconBasicWhite};
        }

        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.semantic.color.buttonFilledPrimaryPressed};
        }
      `;
    case 'filledSecondary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonFilledSecondaryEnabled};
        color: ${({ theme }) => theme.semantic.color.textBrandSecondary};
        border: none;

        svg {
          fill: ${({ theme }) => theme.semantic.color.iconBrandSecondary};
        }

        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.semantic.color.buttonFilledSecondaryPressed};
        }
      `;
    case 'outlined':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonOutlinedEnabled};
        color: ${({ theme }) => theme.semantic.color.textBasicPrimary};
        border: 1px solid ${({ theme }) => theme.semantic.color.lineBasicMedium};

        svg {
          fill: ${({ theme }) => theme.semantic.color.iconBasicPrimary};
        }

        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.semantic.color.buttonOutlinedPressed};
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
        svg {
          width: 20px;
          height: 20px;
        }
      `;
    case 'large':
      return css`
        height: 52px;
        border-radius: ${({ theme }) => theme.semantic.radius.xl}px;
        padding: 0 20px;
        ${({ theme }) => theme.typo.B1_Sb_16}
        svg {
          width: 20px;
          height: 20px;
        }
      `;
    case 'medium':
      return css`
        height: 48px;
        border-radius: ${({ theme }) => theme.semantic.radius.l}px;
        padding: 0 16px;
        ${({ theme }) => theme.typo.B1_Sb_16}
        svg {
          width: 20px;
          height: 20px;
        }
      `;
    case 'small':
      return css`
        height: 40px;
        border-radius: ${({ theme }) => theme.semantic.radius.m}px;
        padding: 0 16px;
        ${({ theme }) => theme.typo.B3_Sb_14}
        svg {
          width: 16px;
          height: 16px;
        }
      `;
    case 'xsmall':
      return css`
        height: 32px;
        border-radius: ${({ theme }) => theme.semantic.radius.s}px;
        padding: 0 8px;
        ${({ theme }) => theme.typo.C2_Sb_12}
        svg {
          width: 12px;
          height: 12px;
        }
      `;
    case 'xxsmall':
      return css`
        height: 24px;
        border-radius: ${({ theme }) => theme.semantic.radius.xs}px;
        padding: 0 8px;
        ${({ theme }) => theme.typo.C2_Sb_12}
        svg {
          width: 12px;
          height: 12px;
        }
      `;
  }
};

const getDisabledStyle = ($variant: BoxButtonVariant) => {
  switch ($variant) {
    case 'filledPrimary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonFilledPrimaryDisabled};
        border: none;
      `;
    case 'filledSecondary':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonFilledSecondaryDisabled};
        border: none;
      `;
    case 'outlined':
      return css`
        background-color: ${({ theme }) => theme.semantic.color.buttonOutlinedDisabled};
        border: 1px solid ${({ theme }) => theme.semantic.color.lineBasicMedium};
      `;
  }
};

export const StyledBoxButton = styled.button<StyledBoxButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  ${({ $variant }) => getVariantStyle($variant)}
  ${({ $size }) => getSizeStyle($size)}
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
