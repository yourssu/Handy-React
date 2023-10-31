export type ToastDuration = 'short' | 'long';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  duration?: ToastDuration;
}
