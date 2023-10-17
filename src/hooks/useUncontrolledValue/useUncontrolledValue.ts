import { RefObject, useEffect, useState } from 'react';

/**
 * 비제어 컴포넌트에서 제어 컴포넌트처럼 value를 사용할 수 있게 해주는 훅
 */
export const useUncontrolledValue = <T extends HTMLInputElement | HTMLSelectElement>(
  ref: RefObject<T>,
  value: T['value']
) => {
  const [_value, _setValue] = useState<T['value']>(value);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.value = value;
    _setValue(value);
  }, [value]);

  useEffect(() => {
    if (!ref.current) return;
    const current = ref.current;
    const onChange = (e: Event) => {
      _setValue((e.target as T).value);
    };
    current.addEventListener('change', onChange);
    return () => {
      current?.removeEventListener('change', onChange);
    };
  }, [ref]);

  return _value;
};
