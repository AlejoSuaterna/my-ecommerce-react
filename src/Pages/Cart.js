import { useCartContext } from "../context/CartContext";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeProduct } = useCartContext();
  
  return (
    <div className="cartContainer">
      {console.log(cart)}
      <div className="cartTittle">
        <h2>Tu carrito</h2>
        <hr />
      </div>
      <hr />
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
              {cart.map((props) => (
                <Row key={props.id} className="prodGrid">
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
                  <Col m={5} className="subTotal">{`$ ${props.precio * props.quantity}`}</Col>
                  <Col m={6} className="itemClear">
                    <Button
                      className="clearProd"
                      onClick={() => removeProduct(props.id)}
                    ></Button>
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
              <Button className="finalizar ">FINALIZAR COMPRA</Button>
            </div>
          </div>
        </div>
      )}
    <div>Esta es la cart: {cart.nombre}</div>
    </div>
  );
};

export default Cart;
