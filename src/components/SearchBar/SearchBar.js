import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="container">
      <input type="search" placeholder="Buscar" className="searchbar" />
    </div>
  );
}

export default SearchBar;
