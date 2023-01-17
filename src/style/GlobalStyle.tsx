import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --font-gray: #272727;
}
* {
  box-sizing: border-box;
  color: var(--font-gray);
  margin: 0;
  padding: 0;
  font-size: 16px;
}
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyle;
