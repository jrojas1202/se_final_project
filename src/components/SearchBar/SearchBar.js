import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="Search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
