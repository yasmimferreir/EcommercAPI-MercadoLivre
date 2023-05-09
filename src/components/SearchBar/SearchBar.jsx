import React from "react";
import {BiSearch} from "react-icons/bi";
import "./SearchBar.css";
import { useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  return(
    <>
      <form className="search-bar">
        <input 
          type="search" 
          value={searchValue}
          placeholder="Buscar produtos" 
          className="search_input" 
          required
          onChange={({target}) => setSearchValue(target.value) }
        />
       
        <button type="submit" className="search_button">
          <BiSearch/>
        </button>
      </form>

    </>
  );
}

export default SearchBar;
