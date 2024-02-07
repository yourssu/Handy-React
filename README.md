![Thumbnail](https://github.com/yourssu/YDS-React/assets/84809236/59230bff-8e2c-4464-ac75-dafe32e2eb7f)

## 🎨 YDS란

YDS는 숭실대학교 동아리 유어슈에서 사용하는 디자인 시스템입니다. 뷰 컴포넌트 재사용성을 높여 코드 작성에 걸리는 시간을 단축함과 동시에 일관된 디자인 퀄리티를 보장하기 위해 고안됐습니다.

## 📝 문서

[YDS Wiki](https://yourssu.notion.site/Yourssu-Design-System-00577fab034e46cb8aeb330247376a15)  
YDS 문서는 노션 페이지에서 관리됩니다.  
컴포넌트 정보와 사용 예시 등을 확인할 수 있습니다.

[YDS Storybook](http://yds-react-storybook.s3-website.ap-northeast-2.amazonaws.com/?path=/docs/foundation-iconcontext--docs)

## 🖌 피그마

[YDS Figma](https://www.figma.com/community/file/1146974544001355129)

## 🛠 사용 방법

1. YDS 패키지 및 styled-components를 설치합니다.

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

## 📱 YDS를 사용해 개발한 프로덕트

[Soomsil-Web](https://github.com/yourssu/Soomsil-Web)

## 💻 타 버전 저장소

[YDS-Android](https://github.com/yourssu/YDS-Android)  
[YDS-iOS](https://github.com/yourssu/YDS-iOS)
