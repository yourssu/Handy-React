import { StyledToast, StyledToastWrapper } from './Toast.style';
import { ToastProps } from './Toast.type';

export const Toast = ({ children, duration = 'short', width, ...props }: ToastProps) => {
  if (!children) return;

  return (
    <StyledToastWrapper>
      <StyledToast $duration={duration} $width={width} {...props}>
        {children}
      </StyledToast>
    </StyledToastWrapper>
  );
};
