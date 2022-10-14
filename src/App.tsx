import { useState } from "react";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar toggleTheme={toggleTheme} />
        <GlobalStyle />
        <RoutesApp />
      </div>
    </ThemeProvider>
  );
};

export default App;
