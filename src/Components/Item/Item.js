import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../Css/Item.css";

function Item({ id, nombre, precio, stock, imagen }) {
  return (
    <Col className="prod">
      <div className="itemMain">
        <Link className="item-link" to={`/detail/${id}`}>
          {stock == 0 ? <div>SIN STOCK</div> : ""}
          <Card style={{ width: "18rem" }} className="">
            <Card.Img
              variant="top"
              src={imagen}
              width="200"
              align="center"
              alt={nombre}
            />
            <Card.Body>
              <div className="p1-item"> {nombre} </div>
              <Card.Text className="item__stock">stock: {stock}</Card.Text>
              <Card.Text className="item__precio">
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "COP",
                  maximumSignificantDigits: 6,
                }).format(precio)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </Col>
  );
}

export default Item;
