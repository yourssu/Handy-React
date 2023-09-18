export enum BadgeColor {
  Mono = 'mono',
  Lime = 'lime',
  Green = 'green',
  Emerald = 'emerald',
  Aqua = 'aqua',
  Blue = 'blue',
  Indigo = 'indigo',
  Violet = 'violet',
  Purple = 'purple',
  Pink = 'pink',
}

export interface BadgeProps {
  color?: BadgeColor;
  children?: string;
  leftIcon?: React.ReactNode;
}
