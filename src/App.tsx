import { useState } from "react";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import NavBar from "./components/NavBar/NavBar";
import usePersistentState from "./utils/usePersistedState";

const App = () => {
  const [theme, setTheme] = usePersistentState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <NavBar toggleTheme={toggleTheme} />
        <RoutesApp />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export default App;
