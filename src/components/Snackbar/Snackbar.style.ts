import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { match } from 'ts-pattern';

import { SnackbarHeightType, SnackbarPosition, SnackbarProps, SnackbarType } from './Snackbar.type';

interface StyledSnackbarProps {
  $type: 'info' | 'error';
  $width: SnackbarProps['width'];
  $margin?: SnackbarProps['margin'];
  isClosing?: boolean;
  position: SnackbarPosition;
  $heightType?: SnackbarHeightType;
}

const getBackgroundStyle = ($type: SnackbarType) => {
  return match($type)
    .with('error', () => '#FFEBEB')
    .otherwise(() => '#3F434D');
};

const getFontColorStyle = (arg: { $type: SnackbarType; theme: DefaultTheme }) => {
  return match(arg)
    .with({ $type: 'error' }, ({ theme }) => theme.semantic.color.textStatusNegative)
    .otherwise(() => arg.theme.semantic.color.textBasicWhite);
};

const getPositionStyle = (position: SnackbarPosition, margin?: string) => {
  return match(position)
    .with(
      'left',
      () => css`
        left: 0;
        margin-left: ${margin || '16px'};
      `
    )
    .with(
      'right',
      () => css`
        right: 0px;
        margin-right: ${margin || '16px'};
      `
    )
    .otherwise(
      () => css`
        left: 0;
        right: 0;
        margin: 0 auto;
        align-items: center;
      `
    );
};

export const StyledSnackbarContainer = styled.div<
  Omit<StyledSnackbarProps, '$type' | '$width' | 'visible'>
>`
  position: fixed;
  bottom: 0;
  width: ${({ position }) => (position === 'full-width' ? '100%' : 'fit-content')};
  height: fit-content;
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;
  ${({ position, $margin }) => getPositionStyle(position, $margin)}
`;

export const StyledSnackbar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isClosing',
})<StyledSnackbarProps>`
  position: relative;
  padding: 24px;
  margin-bottom: 16px;
  width: ${({ position, $width }) => (position === 'full-width' ? 'calc(100% - 32px)' : $width)};
  height: ${({ $heightType }) => ($heightType === 2 ? '72px' : '52px')};
  border-radius: ${({ theme }) => theme.semantic.radius.m}px;

  ${({ theme }) => theme.typo.B3_Rg_14}
  color: ${({ $type, theme }) => getFontColorStyle({ $type, theme })};
  background-color: ${({ $type }) => `${getBackgroundStyle($type)}`};

  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  ${({ isClosing }) => css`
    opacity: ${isClosing ? 0 : 1};
    transform: ${isClosing ? 'translateY(100%)' : 'translateY(0)'};
    transition:
      opacity 300ms ease-out,
      transform 300ms ease-out;
    animation: ${isClosing ? 'none' : 'slideIn 500ms ease-out'};
  `}

  @keyframes slideIn {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const StyledIcMessage = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  gap: 8px;
`;

export const StyledMessage = styled.span`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledErrorIc = styled.div`
  height: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.semantic.color.iconBasicTertiary};
`;
