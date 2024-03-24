# Icon

YDS Icons는 YDS에서 사용하는 아이콘입니다.<br/>
모든 아이콘 종류는 아래에서 확인할 수 있습니다.

```typescript
import { IcSearchLine } from '@yourssu/design-system-react';

function App() {
  return (
    <IcSearchLine />
  )
}
```

2개 이상의 아이콘을 사용할 때, Context Provider로 동일한 스타일을 한번에 적용할 수 있습니다.<br/>
2개 이상의 Context Provider로 아이콘을 감싼 경우에는 가장 가까운 Context Provider의 값을 사용합니다.

Context Provider의 value의 값은 `color`, `size`, `mirrored` 뿐만 아니라 원래 아이콘의 props를 사용할 수 있습니다.<br />
이를 이용해 `className`, `aria-label` 등 관련 속성을 편리하게 이용할 수 있습니다.

```typescript
import { IcSearchLine, IcShareLine, IconContext } from '@yourssu/design-system-react';

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
      <IcShareLine />
    </IconContext.Provider>
  );
}
```
