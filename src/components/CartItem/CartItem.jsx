import React, { useContext } from "react";
import "./CartItem.css";
import { BsCartDashFill } from "react-icons/bs";
import PropTypes from "prop-types";
import FormatCurrency from "../../utils/FormatCurrency";
import AppContext from "../../Context/AppContext";

function CartItem({ data }) {
  const { cartItems, setcartItems} = useContext(AppContext);
  const { id, price, thumbnail, title } = data;

  const handleRemove = () => {
    const updateRemove = cartItems.filter((item) => item.id != id);

    setcartItems(updateRemove);
  };

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="img-do-produto" className="cart-item-image" />

      <div className="cart-item-content" key={id}>
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{FormatCurrency(price, "BRL")}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemove}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: PropTypes.object,
}.isRequired;
