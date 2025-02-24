import { useTheme } from 'styled-components';

import { StyledIndicator } from './LoadingIndicator.style';
import { LoadingIndicatorProps } from './LoadingIndicator.type';

export const LoadingIndicator = ({ indicatorColor, size = 40 }: LoadingIndicatorProps) => {
  const theme = useTheme();

  return (
    <StyledIndicator>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size.toString()}
        height={size.toString()}
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20Z"
          fill={theme.semantic.color.bgBasicStrong}
        />
        <path
          d="M37.5 20C37.5 22.2981 37.0473 24.5738 36.1679 26.697C35.2884 28.8202 33.9994 30.7493 32.3744 32.3744C30.7493 33.9994 28.8202 35.2884 26.697 36.1679C24.5738 37.0473 22.2981 37.5 20 37.5C17.7019 37.5 15.4262 37.0473 13.303 36.1679C11.1798 35.2884 9.25066 33.9994 7.62563 32.3744C6.00061 30.7493 4.71156 28.8202 3.83211 26.697C2.95265 24.5738 2.5 22.2981 2.5 20"
          stroke={indicatorColor ?? theme.semantic.color.lineBrandPrimary}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </StyledIndicator>
  );
};
