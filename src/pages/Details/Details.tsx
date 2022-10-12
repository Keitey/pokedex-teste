import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAbilities } from "../../services/api";

import * as C from "./styles"

const Details = () => {
  const { id }: any = useParams();
  const [abilities, setAbilites] = useState<any[]>([])
  const [pokemon, setPokemon] = useState({
      name: "",
      image: "",
      moves: [],
      types: []
  });

  useEffect(() => {
    async function fetchAbilities(data: any){
      const abilitiesData = await getAbilities(data.abilities)
      setAbilites(abilitiesData)
      console.log(abilitiesData)
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const pokemon = {
          id,
          image: data.sprites.other.home.front_default,
          name: data.name,
          moves: data.moves.slice(0,3),
          types: data.types,
        };;
        setPokemon(pokemon);
        fetchAbilities(data)
        console.log(pokemon)
      });
  }, [id]);

  return (
    <>
    <C.PokeDetails>
      <C.Poke>
      <span>nome do pokemon</span>
      <img src={pokemon.image} alt="" />
      </C.Poke>
      <C.Description>
        <span>moves:</span>
        <span>Habilidades:</span>
        <span>Tipo do pokemon:</span>
      </C.Description>

    </C.PokeDetails>
    </>
  );
};

export default Details;
