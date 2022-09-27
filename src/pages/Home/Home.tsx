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
    for (let i = 1; i < 10; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    let response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <NavBar />
      <C.Container>
        {pokemons.map((pokemon, key) => {
          return <PokeCard name={pokemon.data.name} key={key} image={pokemon.data.sprites.front_default} />;
        })}
      </C.Container>
    </>
  );
};

export default Home;
