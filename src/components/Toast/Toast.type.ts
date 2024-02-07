export type ToastDuration = 'short' | 'long';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 화면에 띄울 메시지 */
  children?: React.ReactNode;
  /** 지속 시간 (1.5s | 3s)*/
  duration?: ToastDuration;
}
