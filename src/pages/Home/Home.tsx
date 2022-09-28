import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import PokeCard from "../../components/PokeCard/PokeCard";
import * as C from "./styles";

const Home = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let endpoints = [];
    for (let i = 1; i < 11; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
      .catch((err) => console.error(err));
  };

  const pokemonsFilter = (name: any): void => {
    let filteredPokemons = [];
    if(name === ''){
      getPokemons()
    }
    for(let i in pokemons) {
      if(pokemons[i].data.name.includes(name)){
        filteredPokemons.push(pokemons[i])
      }
    }

    setPokemons(filteredPokemons)
  }

  return (
    <>
      <NavBar pokemonsFilter={pokemonsFilter}/>
      <C.Container>
        {pokemons.map((pokemon, key) => {
          return (
            <PokeCard
              name={pokemon.data.name}
              key={key}
              image={pokemon.data.sprites.front_default}
            />
          );
        })}
      </C.Container>
    </>
  );
};

export default Home;
