import { styled, css } from 'styled-components';

import { DeviceType } from './DotPagination.type';

const sizeStyles = css<{ $size: DeviceType }>`
  ${({ $size }) => {
    switch ($size) {
      case 'web':
        return css`
          width: 10px;
          height: 10px;
        `;
      case 'mobile':
        return css`
          width: 6px;
          height: 6px;
        `;
    }
  }}
`;

export const StyledDotPaginationContainer = styled.div<{ $size: DeviceType }>`
  display: flex;
  justify-content: center;
  gap: ${({ $size }) => ($size === 'web' ? '10px' : '6px')};
`;

export const StyledDotInput = styled.input<{ $size: DeviceType }>`
  appearance: none;
  ${sizeStyles};
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.semantic.color.paginationBasicUnselected};

  &:checked {
    background-color: ${({ theme }) => theme.semantic.color.paginationBasicSelected};
  }
`;
