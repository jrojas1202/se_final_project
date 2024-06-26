export const TYPE_COLOR = {
  dark: "#533C31",
  bug: "#97A713",
  dragon: "#7662E1",
  electric: "#F7B617",
  fairy: "#F3AEF3",
  fighting: "#7D321B",
  fire: "#C82102",
  flying: "#94A8F5",
  ghost: "#5D60AE",
  grass: "#78C538",
  ground: "#D6B056",
  ice: "#A0E5FC",
  normal: "#C7C2B9",
  poison: "#944795",
  psychic: "#E84A81",
  rock: "#BBA459",
  steel: "#AAAAB8",
  water: "#3194F8",
};

export const baseUrl = "https://pokeapi.co/api/v2/pokemon";
export const speciesUrl = "https://pokeapi.co/api/v2/pokemon-species";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};
