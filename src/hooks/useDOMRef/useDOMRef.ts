import { Ref, RefObject, useImperativeHandle, useRef } from 'react';

/**
 * forwardRef hook for DOM elements
 */
export const useDOMRef = <T extends HTMLElement = HTMLElement>(
  ref?: RefObject<T | null> | Ref<T | null>
) => {
  const domRef = useRef<T>(null);
  useImperativeHandle(ref, () => domRef.current);
  return domRef;
};
