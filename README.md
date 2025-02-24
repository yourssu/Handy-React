![Thumbnail](https://github.com/user-attachments/assets/c74741c4-d57c-437e-8f76-815adf6b846c)

## 🎨 Handy란

Handy는 숭실대학교 동아리 유어슈에서 사용하는 디자인 시스템입니다. 뷰 컴포넌트 재사용성을 높여 코드 작성에 걸리는 시간을 단축함과 동시에 일관된 디자인 퀄리티를 보장하기 위해 고안됐습니다.

## 📝 문서

Handy-React 문서는 스토리북으로 관리됩니다.  
컴포넌트 정보와 사용 예시 등을 살펴볼 수 있습니다.

Repository details의 링크에서 문서를 열람할 수 있습니다.

## 🛠 사용 방법

1. Handy-React 패키지 및 styled-components를 설치합니다.

```
npm install @yourssu/design-system-react styled-components

yarn add @yourssu/design-system-react styled-components

pnpm install @yourssu/design-system-react styled-components
```

2. Root Component에 YDSWrapper를 감싸줍니다.

```jsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <YDSWrapper>
      <App />
    </YDSWrapper>
  </React.StrictMode>
);
```

## 📱 Handy-React를 사용해 개발한 프로덕트

[Soomsil-Web](https://github.com/yourssu/Soomsil-Web)

[Yourssu-Scouter](https://github.com/yourssu/Yourssu-Scouter-Frontend)

[뿌슝타로 - 뿌슝이가 알려주는 오늘의 운세](https://github.com/yourssu/ppusyung-tarot)

## 💻 타 버전 저장소

[Handy-Android](https://github.com/yourssu/Handy-Android)

[Handy-iOS](https://github.com/yourssu/Handy-iOS)
