import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAbilities } from "../../services/api";

import * as C from "./styles";

const Details = () => {
  const { id }: any = useParams();
  const [abilities, setAbilites] = useState<any[]>([]);
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    moves: [],
    types: [],
  });

  useEffect(() => {
    async function fetchAbilities(data: any) {
      const abilitiesData = await getAbilities(data.abilities);
      setAbilites(abilitiesData);
      console.log(abilitiesData);
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const pokemon = {
          id,
          image: data.sprites.other.home.front_default,
          name: data.name,
          moves: data.moves.slice(0, 3),
          types: data.types,
        };
        setPokemon(pokemon);
        fetchAbilities(data);
        console.log(pokemon);
      });
  }, [id]);

  return (
    <>
      <C.PokeDetails>
        <C.Poke>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} />
        </C.Poke>
        <C.Description>
          <C.Title>Moves:</C.Title>
          <C.Content>
            {pokemon.moves.map((move, id) => {
              return <li key={id}>⭐{move.move.name}</li>;
            })}
          </C.Content>

          <C.Title>Abilities:</C.Title>
          <C.Content>
            
          </C.Content>
        </C.Description>
      </C.PokeDetails>
    </>
  );
};

export default Details;
