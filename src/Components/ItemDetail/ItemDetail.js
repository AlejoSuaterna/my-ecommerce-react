import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ imagen, nombre, precio, stock }) {
  return (
    <p>
      <p>HOLA MUNDO</p>
      <Card style={{ width: "18rem" }}>
        <h2>Detalles</h2>
        <div align="center">
          <Card.Img variant="top" />
          <img
            alt=""
            src={imagen}
            width="250"
            height="180"
            align="center"
          />
        </div>
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Costo $ {precio}</Card.Text>
          <Card.Text>Cantidad en stock {stock}</Card.Text>
          <ItemCount stock={stock} inicial={0} />
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Footer>
      </Card>
    </p>
  );
}

export default ItemDetail;
