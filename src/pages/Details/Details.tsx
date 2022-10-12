import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAbilities, getPokemons } from "../../services/api";

const Details = () => {
  const { id }: any = useParams();
  const [abilities, setAbilites] = useState<any[]>([])
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    async function fetchAbilities(data: any){
      const abilitiesData = await getAbilities(data.abilities)
      setAbilites(abilitiesData)
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const pokemons = {
          id,
          image: data.sprites.other.home.front_default,
          name: data.name,
          moves: data.moves,
          types: data.types,
          abilities: data.abilities,
        };;
        setPokemons(pokemons);
        fetchAbilities(data)
      });
  }, [id]);

  return (
    <div>
      <h1>página de detalhes</h1>
    </div>
  );
};

export default Details;
