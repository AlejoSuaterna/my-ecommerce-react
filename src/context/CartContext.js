import React, { useContext, useState } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = (id, imagen, nombre, precio, stock, newQuantity) => {
    const newCart = cart.filter((prod) => prod.id !== id);
    newCart.push({
      ...cart,
      id,
      imagen,
      nombre,
      precio,
      stock,
      quantity: newQuantity,
    });
    setCart(newCart);
    console.log(">> elementos del carrito actualmente: ", newCart);
  };

  // const addProduct = (id, imagen, nombre, precio, stock, newQuantity) => {
  //   const newCart = cart.find((prod) => prod.id == id)
  //     ? cart.map((prod) => {
  //         if (prod.id == id) {
  //           return {
  //             ...cart,
  //             id,
  //             imagen,
  //             nombre,
  //             precio,
  //             stock,
  //             quantity: prod.quantity + newQuantity,
  //           };
  //         }
  //         return prod;
  //       })
  //     : [{ ...cart, id, imagen, nombre, precio, stock, quantity: newQuantity }];

  //   setCart(newCart);
  // };

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        cartData: cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
