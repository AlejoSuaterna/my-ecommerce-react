import React from "react";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function ItemDetail({ id, imagen, nombre, precio, stock }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAddItems = (quantity) => {
    setAddedToCart(true);
    addProduct( id, imagen, nombre, precio, stock, quantity);
  };

  return (
    <div className="row g-0">
      <h2>Detalles</h2>
      <div className="col-sm-6 col-md-8">
        <img src={imagen} tam="lg" ubi="mx-auto d-block" alt="" height="400"></img>
      </div>
      <div className="col-6 col-md-4">
        <h2>{nombre}</h2>
        <h4>{"COP " + precio}</h4>
        <p className="text-muted">{"Lleva un maximo de " + stock + " unidades"}</p>
        {addedToCart ? (
          <div className="d-grid gap-2">
            <Link to="/cart">
              <Button className="btnAdded">Ir al carrito</Button>
            </Link>
            <Link to="/">
              <button
                className="btnAdded btn btn-dark btn btn-secondary button-tam">
                Continuar comprando
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <ItemCount
              onAddToCart={onAddItems}
              stock={stock}
              inicial={0}
            ></ItemCount>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
