import { StyledToast, StyledToastWrapper } from './Toast.style';
import { ToastProps } from './Toast.type';

export const Toast = ({ children, duration = 'short', ...props }: ToastProps) => {
  if (!children) return;

  return (
    <StyledToastWrapper>
      <StyledToast $duration={duration} {...props}>
        {children}
      </StyledToast>
    </StyledToastWrapper>
  );
};
