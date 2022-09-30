import { useState, useEffect } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import * as C from "./styles";

const Home = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=10`)

  const getPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokeObj(result: any){
      result.forEach(async (pokemon: any) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()

        setPokemons(currentList => [...currentList, data])
      })
    }
    createPokeObj(data.results)
  };

  useEffect(() => {
    getPokemons();
  }, []);


  return (
    <div style={{ paddingBottom: "2rem" }}>
        <C.Container>
        {pokemons.map((pokemon, key) => {
          return (
            <PokeCard
              name={pokemon.name}
              key={key}
              image={pokemon.sprites.other.dream_world.front_default}
            />
          );
        })}
        </C.Container>
      <C.Button onClick={()=> getPokemons()}>Buscar mais...</C.Button>
    </div>
  );
};

export default Home;
