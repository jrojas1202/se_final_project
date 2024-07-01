import { baseUrl, speciesUrl, request } from "./Constants";

export const fetchGlobalPokemon = async () => {
  const res = await request(`${baseUrl}?limit=1008&offset=0`);

  const promises = res.results.map((pokemon) => {
    return pokemon;
  });

  return await Promise.all(promises);
};

export const fetchInitialPokemon = async (limit, offset) => {
  const intitialPokemon = await request(
    `${baseUrl}?limit=${limit}&offset=${offset}`
  );

  return intitialPokemon;
};

export const fetchPokemonData = async (name) => {
  const pokemonData = await request(`${baseUrl}/${name}`);

  return pokemonData;
};

export const fetchPokemonStats = async (id) => {
  const pokemonStats = await request(`${baseUrl}/${id}`);

  return pokemonStats;
};

export const fetchPokemonSpecies = async (id) => {
  const speciesData = await request(`${speciesUrl}/${id}`);

  return speciesData;
};
