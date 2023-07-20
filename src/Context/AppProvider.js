import React from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types";

function Provider({ children }) {
  return (
    <>
      <AppContext.Provider>{children}</AppContext.Provider>
    </>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;
