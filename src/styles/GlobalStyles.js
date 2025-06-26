import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.primaryDark};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.primaryDark};
    margin-bottom: 1rem;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  section {
    padding: 1rem 0;
  }
`;