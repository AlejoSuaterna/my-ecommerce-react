import { useCartContext } from "../../context/CartContext";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
const Cart = () => {
  const { cartData, removeProduct } = useCartContext();
  const totalPrecio = cartData.reduce((prev, next) => {
    return prev + next.quantity * next.precio;
  }, 0);

  return (
    <div className="cartContainer">
      {console.log(cartData)}
      <div className="cartTittle">
        <h2>Tu carrito</h2>
        <hr />
      </div>
      <hr />
      {cartData == "" ? (
        <div className="cartTittle">
          <p>¡El carrito está vacío!</p>
          <Button as={Link} to="/" className="continue">
            Ir de compras
          </Button>
        </div>
      ) : (
        <>
          <Container className="cartGrid">
            <Row className="datosGrid">
              <Col m={1}>IMAGEN</Col>
              <Col m={3}>PRODUCTO</Col>
              <Col m={4} className="datosCant">
                CANTIDAD
              </Col>
              <Col m={5}>PRECIO UNITARIO</Col>
              <Col m={6}>PRECIO TOTAL</Col>
              <Col m={7}>BORRAR PRODUCTO</Col>
            </Row>
            {cartData.map((props) => (
              <Container key={props.id} className="containerProds">
                <Row className="prodGrid">
                  <Col m={1} className="itemImg">
                    <Link to={`/detail/${props.nombre}`}>
                      <img src={props.imagen} width="100px" alt=""></img>
                    </Link>
                  </Col>
                  <Col m={2} className="itemName">
                    {props.nombre}
                  </Col>
                  <Col m={3} className="itemCont">
                    {props.quantity}
                  </Col>
                  <Col m={4} className="itemPrice">{`$ ${props.precio}`}</Col>
                  <Col m={5} className="subTotal">{`$ ${
                    props.precio * props.quantity
                  }`}</Col>
                  <Col m={6} className="itemClear">
                    <Button
                      className="clearProd"
                      onClick={() => removeProduct(props.id)}
                    ></Button>
                  </Col>
                </Row>
              </Container>
            ))}
          </Container>
        </>
      )}
      <div align="middle" category="">
        <h2>Total: $ {totalPrecio}</h2>
      </div>
      <hr />
      {cartData == "" ? (
        <></>
      ) : (
        <div className="cartBottom">
          <div className="cartButtons">
            <Button as={Link} to="/" className="continue">
              Continuar comprando
            </Button>
            <div className="bottomButtons">
              <Button as={Link} to="" className="finalizar " variant="success">
                FINALIZAR COMPRA
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
