import { useState } from "react";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Header from "./components/Header/Header";
import usePersistentState from "./utils/usePersistedState";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  const [theme, setTheme] = usePersistentState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header toggleTheme={toggleTheme} />
        <RoutesApp />
        <ScrollToTop />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export default App;
