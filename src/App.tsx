import { useState } from "react";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

const App = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <RoutesApp />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

export default App;
