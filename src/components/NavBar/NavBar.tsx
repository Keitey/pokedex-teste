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
      <form action="">
        <input
          type="search"
          name="navpoke"
          id="navepoke"
          placeholder="Buscar Pokémon..."
        />
      </form>
    </C.NavContainer>
  );
};

export default NavBar;
