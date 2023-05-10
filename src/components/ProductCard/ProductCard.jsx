import React from "react";
import "./ProductCard.css";

function ProductCard() {
  return(
    <>
      <section className="product-card">
        <img src="https://http2.mlstatic.com/D_932360-MLA46545868431_062021-W.jpg" alt="product" className="card__image"/>

        <div className="card__infos">
          <h2 className="card__price">R$ 200.00</h2>
          <h2 className="card__title">title</h2>
        </div>

        <button type="button" className="button__add-card">+</button>

      </section>

    </>
  );
}

export default ProductCard;
