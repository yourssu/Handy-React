# Typos

Handy Typography는 Handy에서 사용하는 타이포그래피 스타일입니다.

- 폰트는 **Pretendard**를 사용합니다. 단, 필기체와 같은 브랜딩 폰트는 가이드에서 벗어나 자유롭게 사용 가능합니다.
- 폰트의 **한글과 영문을 잘 구분**해서 사용합니다.

모든 타이포그래피 스타일은 아래에서 확인할 수 있습니다.

<br />

## 한글 스타일

```ts
import { styled } from 'styled-components';

const StyledDiv = styled.div`
  ${({ theme }) => theme.typo.kr.D1_EN_Sb_96};
`;
```

- 기본적으로 `letter-spacing` 값이 `-0.02em` 으로 설정되어 있습니다.

<br />

## 영문 스타일

```ts
import { styled } from 'styled-components';

const StyledDiv = styled.div`
  ${({ theme }) => theme.typo.en.D1_EN_Sb_96};
`;
```
