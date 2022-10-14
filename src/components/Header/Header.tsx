import * as C from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

interface Props {
  toggleTheme(): void;
}

const NavBar = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <C.NavContainer>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.png"
        alt="pokedex"
      />
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        onColor={colors.switchOn}
        offColor={colors.switchOff}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </C.NavContainer>
  );
};

export default NavBar;
