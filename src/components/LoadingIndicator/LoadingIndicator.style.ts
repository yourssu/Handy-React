import { styled } from 'styled-components';

export const StyledIndicator = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    flex-shrink: 0;
  }

  transform: rotate(0deg);
  animation: rotateAnimation 600ms linear infinite;

  @keyframes rotateAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
