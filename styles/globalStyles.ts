import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../constants/theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
   html, 
   body {
      margin: 0;
      padding: 0;
      font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      color: ${({ theme }) => theme.colors.base}
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
`;
export default GlobalStyle;
