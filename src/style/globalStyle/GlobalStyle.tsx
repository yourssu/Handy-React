import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  custom: {
    families: ['Pretendard Variable'],
    urls: [
      '//cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css',
    ],
  },
});

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard Variable', 'sans-serif';
  }
`;
