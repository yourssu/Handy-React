import { css, keyframes, styled } from 'styled-components';

import { ToastDuration, ToastProps } from './Toast.type';

interface StyledToastProps {
  $duration: ToastDuration;
  $width: ToastProps['width'];
}

const SHORT_DURATION = 1.5;
const LONG_DURATION = 3;
const FADE_DURATION = 0.25;

export const ToastFadeIn = keyframes`
to {
  opacity: 1;
}
`;

export const ToastFadeOut = keyframes`
to {
  opacity: 0;
}
`;

const setToastAnimation = ($duration: ToastDuration) => {
  switch ($duration) {
    case 'short':
      return css`
        animation:
          ${ToastFadeIn} ${FADE_DURATION}s ease-in forwards,
          ${ToastFadeOut} ${FADE_DURATION}s ${SHORT_DURATION + FADE_DURATION}s ease-out forwards;
      `;
    case 'long':
      return css`
        animation:
          ${ToastFadeIn} ${FADE_DURATION}s ease-in forwards,
          ${ToastFadeOut} ${FADE_DURATION}s ${LONG_DURATION + FADE_DURATION}s ease-out forwards;
      `;
  }
};

export const StyledToastWrapper = styled.div`
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
  padding: 0px 8px;
  pointer-events: none;
  display: flex;
  justify-content: center;
`;

export const StyledToast = styled.div<StyledToastProps>`
  opacity: 0;
  border-radius: 8px;
  min-width: fit-content;
  width: ${({ $width }) => $width};
  max-width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.toastBG};
  color: ${({ theme }) => theme.color.textBright};
  ${({ theme }) => theme.typo.body2};
  ${({ $duration }) => setToastAnimation($duration)};
  white-space: pre-line;
  position: absolute;
  bottom: 66px;
`;
