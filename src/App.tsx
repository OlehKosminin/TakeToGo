import React from "react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Router from "./Routes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
