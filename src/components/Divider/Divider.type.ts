export type DividerThickness = 1 | 2 | 4 | 8;
export type DividerColor = 'light' | 'medium' | 'strong';

export interface DividerProps {
  width?: number;
  thickness: DividerThickness;
  color?: DividerColor;
}
