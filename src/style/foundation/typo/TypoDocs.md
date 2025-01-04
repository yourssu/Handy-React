# Typos

Handy Typography는 Handy에서 사용하는 타이포그래피 스타일입니다.

- 폰트는 **Pretendard**를 사용합니다. 단, 필기체와 같은 브랜딩 폰트는 가이드에서 벗어나 자유롭게 사용 가능합니다.
- 굵기는 Light(300), Regular(400), Semibold(600) 만 사용합니다.
- subset 파일을 사용하므로, 지원하지 않는 글자에 대해 유의해주세요.

<br />

또한, 타이포그래피의 이름은 아래의 규칙을 따릅니다.

> <이름>\_<굵기>\_<크기>

<br />

모든 타이포그래피 스타일은 아래에서 확인할 수 있습니다.

<br />

## 타이포그래피 사용법

```ts
import { styled } from 'styled-components';

const StyledDiv = styled.div`
  ${({ theme }) => theme.typo.D1_Sb_96};
`;
```

## 미리보기
