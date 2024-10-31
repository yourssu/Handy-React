import { useState, useRef, useEffect } from 'react';

export const useTouchMouseDrag = (onDismiss: () => void, threshold: number = 10) => {
  const [startY, setStartY] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleStart = (event: TouchEvent | MouseEvent) => {
    const y = event instanceof TouchEvent ? event.touches[0].clientY : event.clientY;
    setStartY(y);
    setIsDragging(true);
  };

  const handleMove = (event: TouchEvent | MouseEvent) => {
    if (!isDragging || startY === null) return;

    const currentY = event instanceof TouchEvent ? event.touches[0].clientY : event.clientY;
    const diffY = currentY - startY;

    if (diffY > threshold) {
      onDismiss();
      setIsDragging(false);
      setStartY(null);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    setStartY(null);
  };

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.addEventListener('mousedown', handleStart);
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);

      element.addEventListener('touchstart', handleStart);
      element.addEventListener('touchmove', handleMove);
      element.addEventListener('touchend', handleEnd);

      return () => {
        element.removeEventListener('mousedown', handleStart);
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleEnd);

        element.removeEventListener('touchstart', handleStart);
        element.removeEventListener('touchmove', handleMove);
        element.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, startY]);

  return elementRef;
};
