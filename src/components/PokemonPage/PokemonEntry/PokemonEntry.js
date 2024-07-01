import { fetchPokemonSpecies } from "../../../utils/PokeApi";
import { useQuery } from "@tanstack/react-query";

export const PokemonEntry = ({ params }) => {
  const {
    data: pokemonDetails,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemonSpecies", params.id],
    queryFn: async () => await fetchPokemonSpecies(params.id),
  });

  let description = "";
  pokemonDetails?.flavor_text_entries?.some(function (entry) {
    if (entry.language.name === "en") {
      description = entry.flavor_text;
      return description;
    }
    return description;
  });

  let species = "";
  pokemonDetails?.genera?.some(function (gen) {
    if (gen.language.name === "en") {
      species = gen.genus;
      return species;
    }
    return species;
  });

  return (
    <>
      {isLoading ? (
        <div>Loading....</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {" "}
          <span className="pokemon__genus">{species}</span>
          <span className="pokemon__entry">{description}</span>{" "}
        </>
      )}
    </>
  );
};

export default PokemonEntry;
