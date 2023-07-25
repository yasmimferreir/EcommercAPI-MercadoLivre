import React from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.css";
import { useState, useContext } from "react";
import logoMercadoLivre from "../../assests/logo-mercadoLivre.png";
import featchProducts from "../../Api/featchProducts";
import AppContext from "../../Context/AppContext";

function SearchBar() {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState(" ");

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const returnProducts = await featchProducts(searchValue);

    setProducts(returnProducts);
    setLoading(false);
    setSearchValue(" ");
  };

  return (
    <>
      <img src={logoMercadoLivre} alt="logo" className="img-logo" />
      <form className="search-bar" onSubmit={handleSearch}>
        {" "}
        {name}
        <input
          type="search"
          value={searchValue}
          placeholder="Buscar produtos"
          className="search_input"
          required
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <button type="submit" className="search_button">
          <BiSearch />
        </button>
      </form>
    </>
  );
}

export default SearchBar;
