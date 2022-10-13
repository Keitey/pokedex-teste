import { useState, useEffect, MouseEvent } from "react";
import { useParams } from "react-router-dom";
import { getAbilities } from "../../services/api";
import { Link } from "react-router-dom";

import * as C from "./styles";
import Button from '../../components/Button/Button'

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
    <div style={{paddingBottom: '4rem'}}>
      <C.PokeDetails>
        <C.Poke>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} />
        </C.Poke>
        <C.Description>
          <C.Title>Moves:</C.Title>
          <C.Content>
            {pokemon.moves.map((move, id) => {
              return <li key={id}>🥷{move.move.name}</li>;
            })}
          </C.Content>

          <C.Title>Abilities:</C.Title>
          <C.Content>
            {abilities.map((ability, id) => {
              return (
                <div key={id} className="ability">
                  <h4>🧙‍♂️{ability.name}</h4>
                  {ability.effect_entries.slice(1).map((description) => (
                    <p key={id}>{description.effect}</p>
                  ))}
                </div>
              );
            })}
          </C.Content>

          <C.Title>Types:</C.Title>
          <C.Content>
            {pokemon.types.map((type, id) => {
              return <li key={id}>🎯{type.type.name}</li>;
            })}
          </C.Content>
        </C.Description>
      </C.PokeDetails>
      <Link to="/">
        <Button text={"Voltar"}/>
      </Link>
    </div>
  );
};

export default Details;
