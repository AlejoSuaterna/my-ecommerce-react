import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Item({ id, nombre, precio, stock, imagen, categoria }) {
 
  return (
    <Card style={{ width: "18rem" }}>
      <div align="center">
        <Card.Img variant="top" />
        <img alt="" src={imagen} width="230" height="200" align="center" />
      </div>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Categoria: {categoria}</Card.Text>
        <Card.Text>Costo $ {precio}</Card.Text>
        <Card.Text>Cantidad en stock {stock}</Card.Text>
        <Link to={`/detail/${id}`}>
          <Button type="button" className="btn btn-outline-dark">
            Detalle 
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
