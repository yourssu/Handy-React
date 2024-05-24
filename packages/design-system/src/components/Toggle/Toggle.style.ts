import { styled } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

import { ToggleProps } from './Toggle.type';

interface StyledToggleProps {
  $isDisabled: ToggleProps['isDisabled'];
  $isSelected: ToggleProps['isSelected'];
}

const TRACK_WIDTH = 51;
const TRACK_HEIGHT = 31;
const THUMB_SIZE = 27;
const PADDING = 2;
const MIN_WIDTH = 0.1;

const setTrackColor = ({
  $isDisabled,
  $isSelected,
  theme,
}: {
  $isDisabled: StyledToggleProps['$isDisabled'];
  $isSelected: StyledToggleProps['$isSelected'];
  theme: DefaultTheme;
}) => {
  if ($isDisabled) return theme.color.buttonBG;
  if ($isSelected) return theme.color.buttonPoint;
  else return theme.color.buttonBG;
};

export const StyledInput = styled.input`
  display: none;
`;

export const StyledThumb = styled.span<StyledToggleProps>`
  display: inline-block;
  width: ${THUMB_SIZE}px;
  height: ${THUMB_SIZE}px;
  border-radius: 50%;
  background-color: ${({ theme, $isDisabled }) =>
    $isDisabled ? theme.color.buttonDisabled : theme.color.buttonBright};
  transform: ${({ $isSelected }) =>
    $isSelected && `translateX(${TRACK_WIDTH - 2 * PADDING - THUMB_SIZE}px)`};
  transition: 100ms ease-in-out;

  &::before {
    position: absolute;
    content: '';
    border-radius: inherit;
    width: ${THUMB_SIZE + MIN_WIDTH}px;
    height: ${THUMB_SIZE + MIN_WIDTH}px;
    background-color: ${({ theme }) => theme.color.borderNormal};
  }

  &::after {
    position: absolute;
    content: '';
    top: ${MIN_WIDTH}px;
    left: ${MIN_WIDTH}px;
    border-radius: inherit;
    width: inherit;
    height: inherit;
    background-color: inherit;
  }
`;

export const StyledTrack = styled.label<StyledToggleProps>`
  display: inline-block;
  width: ${TRACK_WIDTH}px;
  height: ${TRACK_HEIGHT}px;
  padding: ${PADDING}px;
  border-radius: 15px;
  background-color: ${({ theme, $isDisabled, $isSelected }) =>
    setTrackColor({ $isDisabled, $isSelected, theme })};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};

  ${StyledInput}:checked + ${StyledThumb} {
    transform: translateX(${TRACK_WIDTH - 2 * PADDING - THUMB_SIZE}px);
  }
  ${StyledInput} + ${StyledThumb} {
    transform: translateX(0px);
  }
`;

export const StyledToggle = styled.div`
  ${StyledInput}:checked + ${StyledTrack} {
    background-color: ${({ theme }) => theme.color.buttonPoint};
  }
  ${StyledInput}:disabled + ${StyledTrack} {
    background-color: ${({ theme }) => theme.color.buttonBG};
  }
  ${StyledInput} + ${StyledTrack} {
    background-color: ${({ theme }) => theme.color.buttonBG};
  }

  ${StyledInput}:checked + ${StyledTrack} > ${StyledThumb} {
    transform: translateX(${TRACK_WIDTH - 2 * PADDING - THUMB_SIZE}px);
  }
  ${StyledInput} + ${StyledTrack} > ${StyledThumb} {
    transform: translateX(0px);
  }
`;
