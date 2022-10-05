import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './contexts/CartContext';
import { Router } from './Router';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export { App };
