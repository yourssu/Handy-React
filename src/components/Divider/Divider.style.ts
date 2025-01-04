import { styled } from 'styled-components';

import { DividerThickness } from './Divider.type';

export const StyledHr = styled.hr<{ $width?: number; $thickness: DividerThickness }>`
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: ${({ $thickness }) => `${$thickness}px`};
  background: ${({ theme }) => theme.semantic.color.bgBasicStrong};
  border: 0;
`;
