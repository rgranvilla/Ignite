import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { CyclesContextProvider } from "./contexts/CyclesContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export { App };
