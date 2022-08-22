import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import React from "react";

const CartWidget = () => {

  const { cartData } = useCartContext();

  // const totalItems = cartData.reduce((prev, next) => {
  //   return prev + next.quantity;
  // }, 0);

  return (
    <Link className="cart-widget" to={"/cart"}>
      {console.log("carrito en wid", cartData)}
      <img
        alt=""
        src = "https://cdn-icons-png.flaticon.com/512/5087/5087847.png"
        width="45"
        height="45"
        />
      {/* <span>{totalItems}</span> */}
    </Link>
  );
};

export default CartWidget;
