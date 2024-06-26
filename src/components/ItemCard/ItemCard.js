import { Link } from "react-router-dom";
import { TYPE_COLOR } from "../../utils/Constants";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonData } from "../../utils/PokeApi";

const ItemCard = ({ pokemon }) => {
  // console.log(pokemon);
  const { data } = useQuery({
    queryKey: ["pokemonData", pokemon.name],
    queryFn: async () => await fetchPokemonData(pokemon.name),
  });
  // console.log(data);

  return (
    <Link to={`pokemon/${pokemon.name}`}>
      <li
        className="card"
        style={{
          backgroundColor: `${TYPE_COLOR[data?.types[0].type.name]}`,
        }}
      >
        <div className="card__image-container">
          <img
            src={data?.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="card__image"
          />
        </div>
        <p className="card__name">{pokemon.name}</p>
        <div className="card__move-wrapper">
          {data?.moves.slice(0, 3).map((move, i) => {
            return (
              <p className="card__move" key={i}>
                {move.move.name}
              </p>
            );
          })}
        </div>
      </li>
    </Link>
  );
};

export default ItemCard;
