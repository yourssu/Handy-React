export type SnackbarType = 'info' | 'error';
export type SnackbarHeightType = 1 | 2;
export type SnackbarPosition = 'left' | 'center' | 'right';
export type SnackbarWidth =
  | 'full-width'
  | `${number}px`
  | `${number}rem`
  | `${number}em`
  | `${number}%`
  | `${number}vh`
  | `calc(${string})`;

export interface SnackbarProps {
  type?: SnackbarType;
  width?: SnackbarWidth;
  margin?: string;
  message: string;
  onClose?: () => void;
  duration?: number;
  position?: SnackbarPosition;
  isClosing: boolean;
  heightType?: SnackbarHeightType;
}

export type SnackbarWithoutClosingProps = Omit<SnackbarProps, 'isClosing'>;
