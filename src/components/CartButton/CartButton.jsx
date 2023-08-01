import React, { useContext, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartButton.css";
import AppContext from "../../Context/AppContext";

function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("cartLocal:cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const updateCart = async () => {
      const clientInfo = await localStorage.getItem("cartLocal:cartItems");

      return JSON.parse(clientInfo);
    };
    updateCart();
  }, []);

  return (
    <>
      <button
        type="button"
        className="cart_button"
        onClick={() => setIsCartVisible(!isCartVisible)}
      >
        <AiOutlineShoppingCart />
        {cartItems.length > 0 && (
          <span className="cart_status">{cartItems.length}</span>
        )}
      </button>
    </>
  );
}

export default CartButton;
