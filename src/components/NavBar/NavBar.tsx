import * as C from "./styles";

const NavBar = () => {
  return (
    <C.NavContainer>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.png"
        alt="pokedex"
      />
      <form action="">
        <input
          type="search"
          name="navpoke"
          id="navepoke"
          placeholder="Buscar Pokémon"
        />
        <button>Buscar</button>
      </form>
    </C.NavContainer>
  );
};

export default NavBar;
