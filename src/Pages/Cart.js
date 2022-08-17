import {useCartContext} from "../context/CartContext";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeProduct } = useCartContext();


  return (
    <div className="cartContainer">
      <div className="cartTittle">
        <h2>Tu carrito</h2>
        <hr />
      </div>
      <hr />
      <Container className="cartGrid">
        <Row className="datosGrid">
          <Col m={2}>IMAGEN</Col>
          <Col m={3}>NOMBRE DEL PRODUCTO</Col>
          <Col m={2} className="datosCant">CANTIDAD</Col>
          <Col m={2}>PRECIO UNITARIO</Col>
          <Col m={2}>PRECIO TOTAL</Col>
          <Col m={1}></Col>
        </Row>
        <Container className="containerProds">
          {cart == "" ? (
            <div className="vacio">
              <p>¡El carrito está vacío!</p>
              <Button as={Link} to="/" className="continue">
              Ir de compras
              </Button>
            </div>
          ) : (
            <>
              {cart.map((id, nombre, precio, imagen) => (
                <Row key={id} className="prodGrid">
                  <Col m={2} className="itemImg">
                    <Link to={`/detail/${nombre}`}>
                      <img src={imagen} width="100px"  alt=""></img>
                    </Link>
                  </Col>
                  {/* <Col m={3} className="itemName">
                    {item.name} por {item.weight}
                  </Col> */}
                  {/* <Col m={2} className="itemCont">{item.contador}</Col> */}
                  <Col m={2} className="itemPrice">{`$ ${precio}`}</Col>
                  {/* <Col m={2} className="subTotal">{`$ ${
                    item.contador * item.price
                  }`}</Col> */}
                  <Col m={1} className="itemClear">
                    <Button
                      className="clearProd"
                      onClick={() => removeProduct(id)}
                    >
                    </Button>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </Container>
      </Container>
      <hr />
      {cart == "" ? (
        <></>
      ) : (
        <div className="cartBottom">
        {/* <div className="total">TOTAL: ${totalPrice}</div> */}
        <div className="cartButtons">
          <Button as={Link} to="/" className="continue">
            Continuar comprando
          </Button>
          <div className="bottomButtons">
            {/* <Button className="clearCart" onClick={removeAll}>
              vaciar carrito
            </Button> */}
            <Button className="finalizar ">
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