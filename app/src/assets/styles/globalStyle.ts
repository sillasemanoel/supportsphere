// Dependencies
import { createGlobalStyle } from "styled-components";
// Fonts
import Wix from "../fonts/wixmadefordisplay/wixmadefordisplay.ttf";
import Coolvetica from "../fonts/coolvetica/coolveticarg.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: coolvetica;
    src: url(${Coolvetica});
  }

  @font-face {
    font-family: wix;
    src: url(${Wix});
  }

  :root {
    --font-family-primary: coolvetica, sans-serif;
    --font-family-secondary: wix, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    font-family: var(--font-family-primary);
    color: #040202;
    outline: none;
  }

  img {
    user-select: none;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #8e8e8e;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 20px;
  }
`;
