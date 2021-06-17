import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../constants/theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
   html, 
   body {
      margin: 0;
      padding: 0;
      font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      color: ${({ theme }) => theme.colors.base};
      font-weight: 400;
   };
   * {
      box-sizing: border-box;
   };

   li {
      list-style-type: none;
   };
   
   a {
      color: inherit;
      text-decoration: none;
   }

   hr {
      margin: 16px 0;
      border: 0;
      border-top: 1px solid rgba(0,0,0,.1);
   }
`;
export default GlobalStyle;
