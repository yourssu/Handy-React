## Icon

YDS Icons는 Context를 사용하여 모든 아이콘에 기본 스타일을 적용할 수 있습니다.<br/>
모든 아이콘 종류는 [Icon Story](../?path=/story/foundation-icons--primary)에서 확인할 수 있습니다.

```typescript
import { IcSearchLine, IconContext } from '@yourssu/design-system-react';

function App() {
    return (
        <IconContext.Provider
            value={{
                color: '#0f0f0f',
                size: '20px',
                mirrored: false,
            }}
        >
            <IcSearchLine />
        </IconContext.Provider>
    )
}
```

2개 이상의 Context Provider로 Icon을 감싼 경우 가장 가까운 context의 값을 사용합니다.

> value의 값은 color, size, mirrored 뿐만 아니라 원래 Icon의 props를 사용할 수 있습니다.<br />이를 이용해 `className`, `aria-label` 등 관련 속성을 편리하게 이용할 수 있습니다.
