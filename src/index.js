import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { theme } from './utils/theme';

injectGlobal`
  * {
    border: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  a,
  a:hover,
  a:active,
  a:visited {
    text-decoration: none;
    color: inherit;
  }
`;

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  rootElement,
);
