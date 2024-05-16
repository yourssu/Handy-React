import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  custom: {
    families: ['Spoqa Han Sans Neo'],
    urls: ['//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'],
  },
});

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
`;
