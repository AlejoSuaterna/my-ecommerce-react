import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ data }) {
  return (
    
    <Card style={{ width: "18rem" }}>
      <h2>Detalles</h2>
      <div align="center">
        <Card.Img variant="top" />
        <img alt="" src={data.imagen} width="250" height="180" align="center" />
      </div>
      <Card.Body>
        <Card.Title>{data.nombre}</Card.Title>
        <Card.Text>Costo $ {data.precio}</Card.Text>
        <Card.Text>Cantidad en stock {data.stock}</Card.Text>
        <ItemCount stock={data.stock} inicial={0} />
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Footer>
    </Card>

  );
}

export default ItemDetail;