import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
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
      result?.forEach(async (pokemon: any) => {
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


  const pokemonsFilter = (name: any): void => {
    let filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (let i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  return (
    <div style={{ paddingBottom: "2rem" }}>
      <NavBar />
        <C.Container>
        {pokemons.map((pokemon, index) => {
          return (
            <PokeCard
              name={pokemon.name}
              key={index}
              image={pokemon.sprites.other.dream_world.front_default}
            />
          );
        })}
        </C.Container>
      <C.Button onClick={()=> getPokemons()}>buscar</C.Button>
    </div>
  );
};

export default Home;
