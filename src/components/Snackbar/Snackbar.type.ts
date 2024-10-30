export type SnackbarType = 'info' | 'error';
export type SnackbarHeightType = 1 | 2;
export type SnackbarPosition = 'left' | 'center' | 'right' | 'full-width';

export interface SnackbarProps {
  type?: SnackbarType;
  width?: string;
  margin?: string;
  message: string;
  onClose?: () => void;
  duration?: number;
  position?: SnackbarPosition;
  isClosing: boolean;
  $heightType?: SnackbarHeightType;
}

export type SnackbarWithoutClosingProps = Omit<SnackbarProps, 'isClosing'>;
