import React, { useState } from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setcartItems,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;
