import { useCallback, useEffect, useRef, useState } from 'react';

import { IcAlertTriangleFilled, IcCloseFilled } from '@/style';

import { StyledErrorIc, StyledIcMessage, StyledMessage, StyledSnackbar } from './Snackbar.style';
import { SnackbarHeightType, SnackbarProps } from './Snackbar.type';
import { useTouchMouseDrag } from './useMouseTouchDrag';

export const Snackbar = ({
  id,
  type = 'info',
  width,
  margin,
  message,
  onClose,
  duration = 5000,
  position = 'center',
  isClosing: initialIsClosing,
}: SnackbarProps) => {
  const messageRef = useRef<HTMLSpanElement>(null);
  const [heightType, setHeightType] = useState<SnackbarHeightType>(1);
  const [isClosing, setIsClosing] = useState<boolean>(initialIsClosing);

  const closeToast = useCallback(() => {
    if (!isClosing && onClose) {
      setIsClosing(true);
      setTimeout(() => onClose(id), 300);
    }
  }, [isClosing, onClose, id]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeToast();
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, closeToast]);

  useEffect(() => {
    if (messageRef.current) {
      const messageHeight = messageRef.current.clientHeight;
      const lineHeight = parseInt(window.getComputedStyle(messageRef.current).lineHeight, 10);
      const isMultiLine = messageHeight > lineHeight;
      setHeightType(isMultiLine ? 2 : 1);
    }
  }, [message]);

  const handleAnimationEnd = () => {
    if (isClosing && onClose) {
      onClose(id);
    }
  };

  const snackbarRef = useTouchMouseDrag(() => {
    closeToast();
  });

  return (
    <StyledSnackbar
      ref={type === 'info' ? snackbarRef : undefined}
      $type={type}
      $width={width}
      $margin={margin}
      isClosing={isClosing}
      onAnimationEnd={handleAnimationEnd}
      position={position}
      $heightType={heightType}
    >
      <StyledIcMessage>
        {type === 'error' && <IcAlertTriangleFilled size="20px" />}
        <StyledMessage ref={messageRef}>{message}</StyledMessage>
        {type === 'error' && (
          <StyledErrorIc>
            <IcCloseFilled size="20px" onClick={closeToast} />
          </StyledErrorIc>
        )}
      </StyledIcMessage>
    </StyledSnackbar>
  );
};
