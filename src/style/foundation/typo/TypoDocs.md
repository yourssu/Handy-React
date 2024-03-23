# Typos

YDS Typo는 YDS에서 사용하는 타이포그래피 스타일입니다.<br/>
모든 타이포그래피 스타일은 [Typo story](../?path=/story/foundation-typo--primary)에서 확인할 수 있습니다.

```typescript
import { styled } from 'styled-components';

const StyledDiv = styled.div`
  ${({ theme }) => theme.typo.body1};
`;
```
