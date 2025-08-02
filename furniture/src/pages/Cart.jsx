import React from "react";
// import CartFunctioanlity from "../components/CartFunctioanlity";
import CartFuntionality from "../components/CartFunctioanlity";
import { useState } from "react";

const Cart = () => {
  const [cartOpen, setCartOPen] = useState(true);
  return (
    <div className="">
    <CartFuntionality
      isOpen={cartOpen}
      onClose={() => setCartOPen(false)}
      cartItems={{}}
    />
  </div>
  );
};

export default Cart;
