import { styled } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { match } from 'ts-pattern';

import { SwitchSize } from './Switch.type';

interface StyledSwitchProps {
  $isDisabled: boolean;
  $isSelected: boolean;
  $size: SwitchSize;
}

const getTrackWidth = (size: SwitchSize) =>
  match(size)
    .with('large', () => 48)
    .with('medium', () => 32)
    .with('small', () => 24)
    .otherwise(() => 48);

const getTrackHeight = (size: SwitchSize) =>
  match(size)
    .with('large', () => 30)
    .with('medium', () => 20)
    .with('small', () => 16)
    .otherwise(() => 30);

const getTrackColor = (arg: { $isDisabled: boolean; $isSelected: boolean; theme: DefaultTheme }) =>
  match(arg)
    .with({ $isDisabled: true }, ({ theme }) => theme.semantic.color.switchDisabled)
    .with({ $isSelected: true }, ({ theme }) => theme.semantic.color.switchSelected)
    .otherwise(({ theme }) => theme.semantic.color.switchUnselected);

const getPadding = (size: SwitchSize) =>
  match(size)
    .with('large', () => 2.5)
    .with('medium', () => 2)
    .with('small', () => 1.5)
    .otherwise(() => 2.5);

export const StyledTrack = styled.div<StyledSwitchProps>`
  width: ${({ $size }) => `${getTrackWidth($size)}px`};
  height: ${({ $size }) => `${getTrackHeight($size)}px`};
  padding: ${({ $size }) => `${getPadding($size)}px`};
  border-radius: 999px;
  background-color: ${({ $isDisabled, $isSelected, theme }) =>
    getTrackColor({ $isDisabled, $isSelected, theme })};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
`;

const getThumbSize = (size: SwitchSize) =>
  match(size)
    .with('large', () => 25)
    .with('medium', () => 16)
    .with('small', () => 13)
    .otherwise(() => 25);

const getThumbTransform = (size: SwitchSize) =>
  getTrackWidth(size) - 2 * getPadding(size) - getThumbSize(size);

export const StyledThumb = styled.div<StyledSwitchProps>`
  width: ${({ $size }) => `${getThumbSize($size)}px`};
  height: ${({ $size }) => `${getThumbSize($size)}px`};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.semantic.color.switchThumb};
  transform: ${({ $size, $isSelected }) =>
    $isSelected && `translateX(${getThumbTransform($size)}px)`};
  transition: ${({ $isSelected }) => ($isSelected ? '150ms ease-out' : '150ms ease-in')};
`;
