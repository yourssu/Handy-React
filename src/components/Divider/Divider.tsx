import { StyledHr } from './Divider.style';
import { DividerProps } from './Divider.type';

export const Divider = ({ width, thickness, color }: DividerProps) => {
  return <StyledHr $width={width} $thickness={thickness} $color={color} />;
};
