import React from "react";
import { Cart } from "../Cart/Cart";

const Checkout = ({ cart, removeFromCart, unitPrice }) => {
  console.log("Cart", cart);
  return (
    <div className="cart container ">
      <Cart cart={cart} removeFromCart={removeFromCart} unitPrice={unitPrice} />
    </div>
  );
};

export default Checkout;
