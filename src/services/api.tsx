const baseURL = `https://pokeapi.co/api/v2/pokemon`;

export async function pokeName(limit: number = 10, offset: number = 0) {
  const res = await fetch(`${baseURL}?limit=${limit}&offset=${offset}`);
  const json = await res.json();
  const names = json.results.map((result: { name: string }) => {
    return result.name;
  });
  return names;
}

export async function getPokemons(name: string) {
  const res = await fetch(`${baseURL}/${name}`);
  const json = await res.json();
  return json;
}

export async function getAbilities(abilities: any) {
  const res = abilities.map(async (ability: any) => {
    const res = await fetch(ability.ability.url);
    const json = await res.json();
    return json;
  });
  const resPromise = await Promise.all(res);
  return resPromise;
}
