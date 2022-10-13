import * as C from "./styles";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <C.NavContainer>
      <Link to="/">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.png"
          alt="pokedex"
        />
      </Link>
    espaço do dark mode
    </C.NavContainer>
  );
};

export default NavBar;
