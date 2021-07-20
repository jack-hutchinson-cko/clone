import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @font-face { 
      font-family: "Graphik LCG";
      font-style: normal;
      font-weight: 400;
      src: url("../fonts/Graphik-Regular-Web.eot");
      src: url("../fonts/Graphik-Regular-Web.eot?#iefix")format("embedded-opentype"),
      url("../fonts/Graphik-Regular-Web.woff") format("woff"),
      url("../fonts/Graphik-Regular-Web.woff2") format("woff2"),
      url("../fonts/Graphik-Regular-Web.ttf") format("truetype");
   };

   @font-face { 
      font-family: "Graphik LCG";
      font-style: normal;
      font-weight: 500;
      src: url("../fonts/Graphik-Medium-Web.eot");
      src: url("../fonts/Graphik-Medium-Web.eot?#iefix")format("embedded-opentype"),
      url("../fonts/Graphik-Medium-Web.woff") format("woff"),
      url("../fonts/Graphik-Medium-Web.woff2") format("woff2"),
      url("../fonts/Graphik-Medium-Web.ttf") format("truetype");
   };

   @font-face { 
      font-family: "Graphik LCG";
      font-style: normal;
      font-weight: 600;
      src: url("../fonts/Graphik-Semibold-Cy-Gr-Web.eot?#iefix")format("embedded-opentype"),
      url("../fonts/Graphik-Semibold-Cy-Gr-Web.woff") format("woff"),
      url("../fonts/Graphik-Semibold-Cy-Gr-Web.woff2") format("woff2"),
      url("../fonts/Graphik-Semibold-Cy-Gr-Web.ttf") format("truetype");
   };

   html, 
   body {
      margin: 0;
      padding: 0;
      font-family: Graphik LCG, sans-serif;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.baseLight};
      background-color: ${({ theme }) => theme.colors.background};
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
   
   #ot-sdk-btn.ot-sdk-show-settings.settings-button {
     border: none;
     height: initial;
     white-space: initial;
     word-wrap: initial;
     padding: initial;
     color: inherit;
     font-size: inherit;
     line-height: inherit;
     transition: none;

     &:hover {
       text-decoration: underline;
       background-color: inherit;
       color: inherit;
     }
   }
`;
export default GlobalStyle;
