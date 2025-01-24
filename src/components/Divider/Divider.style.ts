import { styled } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { match } from 'ts-pattern';

import { DividerColor, DividerThickness } from './Divider.type';

interface StyledHrProps {
  $width?: number;
  $thickness: DividerThickness;
  $color?: DividerColor;
}

const getDividerColor = (arg: { $color?: DividerColor; theme: DefaultTheme }) =>
  match(arg)
    .with({ $color: 'light' }, ({ theme }) => theme.semantic.color.lineBasicLight)
    .with({ $color: 'medium' }, ({ theme }) => theme.semantic.color.lineBasicMedium)
    .with({ $color: 'strong' }, ({ theme }) => theme.semantic.color.lineBasicStrong)
    .otherwise(({ theme }) => theme.semantic.color.lineBasicLight);

export const StyledHr = styled.hr<StyledHrProps>`
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: ${({ $thickness }) => `${$thickness}px`};
  background: ${({ $color, theme }) => getDividerColor({ $color, theme })};
  border: 0;
`;
