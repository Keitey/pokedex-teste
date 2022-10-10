import { useState, useEffect } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { pokeName, getPokemons } from "../../services/api";
import * as C from "./styles";

const Home = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [actualPokemons, setActualPokemons] = useState<any[]>([]);
  const [load, loadMore] = useState(0);
  let page = 10;

  useEffect(() => {
    const fetchData = async () => {
      const names = await pokeName(page, load);
      const pokemonsPromises = names.map(async (name: string) => {
        return await getPokemons(name);
      });
      const pokemonsMore = await Promise.all(pokemonsPromises);
      setPokemons([...pokemons, ...pokemonsMore]);
      setActualPokemons([...pokemons, ...pokemonsMore]);
    };
    fetchData();
  }, [load]);

  async function handleMore() {
    loadMore(load + page);
  }

  return (
    <div style={{ paddingBottom: "2rem" }}>
      <C.Container>
        {pokemons.map((pokemon, index) => {
          return (
            <PokeCard
              name={pokemon.name}
              image={pokemon.sprites.other.home.front_default}
              key={index}
              id={pokemon.id}
            />
          );
        })}
      </C.Container>
      <C.Button onClick={handleMore}>Buscar mais...</C.Button>
    </div>
  );
};

export default Home;
