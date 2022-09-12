import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ id, nombre, precio, stock, imagen }) {

  return (
    <Col className="prod">
      <div className='container2'>
        <Link className='link' to={`/detail/${id}`}>
          {stock == 0 ? <div>SIN STOCK</div> : ''}
          <Card style={{ width: "18rem" }} className="">
            <Card.Img variant="top" src={imagen} width="200" align="center" alt={nombre} />
            <Card.Body>
              <div className='p1'> {nombre} </div>
              <div className='item__numbers'>
                <Card.Text className='num'>stock: {stock}</Card.Text>
                <Card.Text className='num'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP', maximumSignificantDigits: 6 }).format(precio)}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </Col>
  );
}

export default Item;
