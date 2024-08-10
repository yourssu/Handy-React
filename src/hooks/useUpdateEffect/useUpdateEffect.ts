import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const useFirstMountState = () => {
  const isFirstMount = useRef(true);

  if (isFirstMount.current) {
    isFirstMount.current = false;
    return true;
  }

  return isFirstMount.current;
};

const useUpdateEffect = (effect: EffectCallback, deps: DependencyList) => {
  const isFirstMount = useFirstMountState();

  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export { useUpdateEffect };
