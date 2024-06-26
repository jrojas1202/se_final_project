import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

const Main = ({
  filteredPokemon,
  initialPokemon,
  isLoading,
  error,
  isError,
  isPlaceholderData,
  handleNextClick,
  handlePreviousClick,
}) => {
  return (
    <main className="main">
      <section className="cards">
        {!isLoading && filteredPokemon?.length === 0 && <NotFound />}
        {isLoading ? (
          <Preloader />
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <ul className="card__list">
              {filteredPokemon?.map((pokemon, i) => {
                return <ItemCard key={i} pokemon={pokemon} />;
              })}
            </ul>
            <div className="card__button-wrapper">
              {initialPokemon.previous && (
                <button
                  className="card__list-btn"
                  type="button"
                  onClick={handlePreviousClick}
                  disabled={filteredPokemon !== initialPokemon.results}
                >
                  Previous Page
                </button>
              )}
              {isPlaceholderData ||
                (initialPokemon.next && (
                  <button
                    className="card__list-btn"
                    type="button"
                    onClick={handleNextClick}
                    disabled={filteredPokemon !== initialPokemon.results}
                  >
                    Next Page
                  </button>
                ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Main;
