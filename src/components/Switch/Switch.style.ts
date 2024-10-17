import { styled } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { match } from 'ts-pattern';

import { SwitchSize } from './Switch.type';

interface StyledSwitchProps {
  $isDisabled: boolean;
  $isSelected: boolean;
  $size: SwitchSize;
}

const sizeStyle = {
  large: {
    track: {
      width: 48,
      height: 30,
      padding: 2.5,
    },
    thumb: {
      width: 25,
      height: 25,
    },
  },
  medium: {
    track: {
      width: 32,
      height: 20,
      padding: 2,
    },
    thumb: {
      width: 16,
      height: 16,
    },
  },
  small: {
    track: {
      width: 24,
      height: 16,
      padding: 1.5,
    },
    thumb: {
      width: 13,
      height: 13,
    },
  },
} as const;

const getTrackColor = (arg: { $isDisabled: boolean; $isSelected: boolean; theme: DefaultTheme }) =>
  match(arg)
    .with({ $isDisabled: true }, ({ theme }) => theme.semantic.color.switchDisabled)
    .with({ $isSelected: true }, ({ theme }) => theme.semantic.color.switchSelected)
    .otherwise(({ theme }) => theme.semantic.color.switchUnselected);

export const StyledTrack = styled.div<StyledSwitchProps>`
  ${({ $size }) => sizeStyle[$size].track}

  border-radius: 999px;
  background-color: ${({ $isDisabled, $isSelected, theme }) =>
    getTrackColor({ $isDisabled, $isSelected, theme })};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
`;

const getThumbTransform = (size: SwitchSize) => {
  const { track, thumb } = sizeStyle[size];
  return track.width - 2 * track.padding - thumb.width;
};

export const StyledThumb = styled.div<StyledSwitchProps>`
  ${({ $size }) => sizeStyle[$size].thumb}

  border-radius: 50%;
  background-color: ${({ theme }) => theme.semantic.color.switchThumb};
  transform: ${({ $size, $isSelected }) =>
    $isSelected && `translateX(${getThumbTransform($size)}px)`};
  transition: ${({ $isSelected }) => ($isSelected ? '150ms ease-out' : '150ms ease-in')};
`;
