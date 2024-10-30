export type SnackbarType = 'info' | 'error';
export type SnackbarHeightType = 1 | 2;
export type SnackbarPosition = 'left' | 'center' | 'right' | 'full-width';

export interface SnackbarProps {
  id: string;
  type?: SnackbarType;
  width?: string;
  margin?: string;
  message: string;
  onClose?: (id: string) => void;
  duration?: number;
  position?: SnackbarPosition;
  isClosing: boolean;
  $heightType?: SnackbarHeightType;
}
