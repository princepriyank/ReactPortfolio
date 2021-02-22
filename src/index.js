import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./themes/theme";

ReactDOM.render(
  <ThemeProvider theme={light}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
