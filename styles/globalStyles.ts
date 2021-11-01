import { createGlobalStyle } from 'styled-components';
import { spacing } from 'constants/spacingSize';

const globalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
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
    margin: 0 0 ${spacing.s70}px 0;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
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

  #onetrust-consent-sdk #onetrust-policy-text {
    a:focus {
      outline: none;
    }
  }
`;

export default globalStyles;
