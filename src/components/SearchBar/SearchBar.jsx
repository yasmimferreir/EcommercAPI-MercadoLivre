import React from "react";
import {BiSearch} from "react-icons/bi";
import "./SearchBar.css";

function SearchBar() {
  return(
    <>
      <form className="search-bar">
        <input 
          type="search" 
          placeholder="Buscar produtos" 
          className="search__input" 
          required
        />
        <button type="submit" className="search__button">
          <BiSearch/>
        </button>
      </form>

    </>
  );
}

export default SearchBar;
