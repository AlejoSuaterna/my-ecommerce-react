import React from "react";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ItemDetail({ imagen, nombre, precio, stock }) {
  const nf = new Intl.NumberFormat("en-US");
  const [addedToCart, setAddedToCart] = useState(false);
  const onAddItems = () => {
    setAddedToCart(true);
  };

  return (
    <div class="row g-0">
      <h2>Detalles</h2>
      <div class="col-sm-6 col-md-8">
        <img src={imagen} tam="lg" ubi="mx-auto d-block"></img>
      </div>
      <div class="col-6 col-md-4">
        <h2>{nombre}</h2>
        <h4>{"COP " + precio}</h4>
        <p class="text-muted">{"Lleva un maximo de " + stock + " unidades"}</p>
        {addedToCart ? (
          <div class="d-grid gap-2">
            <Link to="/cart">
              <Button className="btnAdded">Ir al carrito</Button>
            </Link>
            <Link to="/">
              <button className="btnAdded"  class="btn btn-dark btn btn-secondary button-tam">Continuar comprando</button>
            </Link>
          </div>
        ) : (
          <div>
            <ItemCount
              stock={nf.format(stock)}
              onAddToCart={onAddItems}
            ></ItemCount>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
