import React from "react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Router from "./Routes";
import theme from "./theme";

const Global = createGlobalStyle`
  * {
  box-sizing: border-box;
}

body {
  font-family: "PFDinDisplayPro";
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.03em;
  margin: 0;
  background-color: #252525;
}

`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <BrowserRouter>
        <Router theme={theme} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
