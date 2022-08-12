import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function ItemCategory({ id, nombre, precio, stock, imagen, categoria }) {
  return (
    <Card style={{ width: "18rem" }}>
      <div align="center">
        <Card.Img variant="top" />
        <img alt="" src={imagen} width="250" height="180" align="center" />
      </div>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Categoria: {categoria}</Card.Text>
        <Card.Text>Costo $ {precio}</Card.Text>
        <Card.Text>Cantidad en stock {stock}</Card.Text>
        <ItemCount stock={stock} inicial={0} />
        <Link to={`/detail/${id}`}>
          <Button type="button" className="btn btn-outline-dark">
            Detalle
          </Button>
        </Link>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Footer>
    </Card>
  );
}

export default ItemCategory;