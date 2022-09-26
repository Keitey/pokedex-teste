import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *, *::before, *::after {
  box-sizing: border-box;
}

:focus{
    outline: none;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

:focus{
  outline: 0;
}

ul {
  list-style: none;
}

a{
  text-decoration: none;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}
`;

export default Global;
