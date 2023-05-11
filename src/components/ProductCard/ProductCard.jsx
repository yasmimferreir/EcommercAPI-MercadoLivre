import React from "react";
import "./ProductCard.css";
import {BsFillCartPlusFill} from "react-icons/bs";
import propTypes from "prop-types";
import FormatCurrency from "../../utils/FormatCurrency";


function ProductCard({data}) {
  const {title, thumbnail, price} = data;

  return(
    <>
      <section className="product-card">
        <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}/>

        <div className="card__infos">
          <h2 className="card__price">{FormatCurrency(price, "BRL")}</h2>
          <h2 className="card__title">{title}</h2>
        </div>

        <button type="button" className="button__add-card"><BsFillCartPlusFill/></button>

      </section>

    </>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
