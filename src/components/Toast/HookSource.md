```typescript
import { ToastDuration, useToast, Toast } from '@yourssu/design-system-react';

const ToastWrapper = () => {
  const toastProps = {
    children: '화면에 띄울 메시지',
    duration: 'long' as ToastDuration,
  };

  const { showToast, isShowToast } = useToast();

  return (
    <div>
      <button onClick={() => { showToast(toastProps.duration); }}> 버튼 </button>
      {isShowToast && <Toast {...toastProps} />}
    </div>
  );
};
```
