import React from "react";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function ItemDetail({ id, imagen, nombre, precio, stock, descripcion }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAddItems = (quantity) => {
    setAddedToCart(true);
    addProduct(id, imagen, nombre, precio, stock, quantity);
  };

  return (
    <div className="row g-0">
      <div className="col-sm-6 col-md-7">
        <img
          src={imagen}
          tam="lg"
          ubi="mx-auto d-block"
          alt=""
          height="400"
        ></img>
      </div>
      <div className="col-6 col-md-3">
        <h2>{nombre}</h2>
        <h4>
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "COP",
            maximumSignificantDigits: 6,
          }).format(precio)}
        </h4>
        <p className="ext-muted">{descripcion}</p>
        <p className="text-muted">
          {"Lleva un maximo de " + stock + " unidades"}
        </p>
        {addedToCart ? (
          <div className="d-grid gap-2">
            <Link to="/cart">
              <Button className="btnAdded" variant="info">
                Ir al carrito
              </Button>
            </Link>
            <Link to="/">
              <button className="btnAdded btn btn-dark btn btn-secondary button-tam">
                Continuar comprando
              </button>
            </Link>
          </div>
        ) : (
          <div>
            {stock == 0 ? (
              <Button variant="btn btn-danger" disabled={true}>Producto sin stock</Button>
            ) : (
              <ItemCount
                onAddToCart={onAddItems}
                stock={stock}
                inicial={1}
              ></ItemCount>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
