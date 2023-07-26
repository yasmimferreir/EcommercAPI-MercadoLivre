import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../Context/AppContext";

function Cart() {
  const { cartItems } = useContext(AppContext);

  return (
    <section className="cart">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className="cart-resume">resumo do carrinho</div>
    </section>
  );
}

export default Cart;
