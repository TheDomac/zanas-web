import { createGlobalStyle } from "styled-components";
import background from "images/background.svg";

const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}
  body {
    font-size: 14px;
    margin: 0;
    padding: 0;
    font-family: 'Roboto',-apple-system,'.SFNSText-Regular','San Francisco','Segoe UI','Helvetica Neue','Lucida Grande',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #1f7bb6;
    background-image: linear-gradient(120deg, rgba(245,251,238,1) 0%, rgba(164,219,188,1) 35%, rgba(16,94,159,1) 100%);
    background-image: url(${background});
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
`;

export default GlobalStyle;
