import { useState } from 'react';

import { ToastDuration } from '@/components/Toast/Toast.type';

export const useToast = () => {
  const removeTime = {
    short: 2000,
    long: 3500,
  };

  const [isShowToast, setIsShowToast] = useState(false);

  const showToast = (duration: ToastDuration) => {
    setIsShowToast(true);
    removeToast(duration);
  };

  const removeToast = (duration: ToastDuration) => {
    const timer = setTimeout(() => {
      setIsShowToast(false);
    }, removeTime[duration]);

    return () => {
      clearTimeout(timer);
    };
  };

  return { isShowToast, showToast };
};
