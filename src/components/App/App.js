import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import About from "../About/About.js";
import Footer from "../Footer/Footer.js";
import PokemonPage from "../PokemonPage/PokemonPage.js";
import { useState } from "react";
import {
  fetchGlobalPokemon,
  fetchInitialPokemon,
} from "../../utils/PokeApi.js";
import { Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { keepPreviousData } from "@tanstack/react-query";

function App() {
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");

  const { data: globalPokemon } = useQuery({
    queryKey: ["globalPokemon"],
    queryFn: fetchGlobalPokemon,
  });

  const {
    data: initialPokemon,
    error,
    isError,
    isLoading,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["pokemon", limit, offset],
    queryFn: async () => await fetchInitialPokemon(limit, offset),
    placeholderData: keepPreviousData,
  });

  const handleSearch = (e) => {
    const text = e.toLowerCase();
    setSearch(text);
  };

  const handleNextClick = () => {
    setOffset((prev) => prev + 20);
  };

  const handlePreviousClick = () => {
    setOffset((prev) => prev - 20);
  };

  const filteredPokemon =
    search.length > 0
      ? globalPokemon?.filter((pokemon) => pokemon.name?.includes(search))
      : initialPokemon?.results;

  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route
          path="/"
          exact
          element={
            <Main
              filteredPokemon={filteredPokemon}
              initialPokemon={initialPokemon}
              handleNextClick={handleNextClick}
              handlePreviousClick={handlePreviousClick}
              isPlaceholderData={isPlaceholderData}
              isError={isError}
              error={error}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
