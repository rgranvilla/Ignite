import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <p>Hello Dt Money</p>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export { App };
