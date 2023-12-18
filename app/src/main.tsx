// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
// Components
import App from "./App";
// Styles
import { GlobalStyle } from "./assets/styles/globalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
