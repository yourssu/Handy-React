import { RefObject, useEffect, useRef, useState } from 'react';

const useSwipe = (groupRef: RefObject<HTMLDivElement>) => {
  const prevXRef = useRef(0);
  const diffRef = useRef(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    prevXRef.current = e.clientX;
    diffRef.current = 0;
    setIsSwiping(true);
  };

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!isSwiping) return;
      if (!prevXRef.current) return;
      if (!groupRef.current) return;

      const DAMPER = 0.1;
      const SPEED_MULTIPLIER = 8;
      const x = e.clientX;
      const xDiff = x - prevXRef.current;

      groupRef.current.scrollLeft -= SPEED_MULTIPLIER * xDiff * DAMPER;
      prevXRef.current = x;
      diffRef.current = xDiff;
    };

    const onPointerEnd = () => {
      if (!groupRef.current) return;
      if (!isSwiping) return;

      setIsSwiping(false);

      const SPEED_FACTOR = 1.5;
      const SPEED_MINIMUM = 0.01;
      const SPEED_DAMPER = 0.92;

      let speed = Math.abs(diffRef.current) * SPEED_FACTOR;
      const dir = diffRef.current > 0 ? 1 : -1;

      const animate = () => {
        const id = requestAnimationFrame(animate);
        const holded = prevXRef.current;

        if (speed < SPEED_MINIMUM || holded) {
          cancelAnimationFrame(id);
          return;
        }

        groupRef.current!.scrollLeft -= speed * dir;
        speed *= SPEED_DAMPER;
      };

      prevXRef.current = 0;
      requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerEnd);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerEnd);
    };
  }, [isSwiping, groupRef]);

  return { ref: groupRef, isSwiping, onPointerDown };
};

export { useSwipe };
