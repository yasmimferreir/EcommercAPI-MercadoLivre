import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";

function Cart() {
  return (
    <section className="cart">
      <div className="cart-items">
        <CartItem data={{ price: "123", thumbnail: "", title: "" }} />
      </div>
      <div className="cart-resume">resumo do carrinho</div>
    </section>
  );
}

export default Cart;
