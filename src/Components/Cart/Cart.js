import { useCartContext } from "../../context/CartContext";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { doc, setDoc, collection, updateDoc, increment } from "firebase/firestore";
import React from "react";
import styled from "styled-components";
import { DB } from "../../Data/DataFireBase";

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 70vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 80;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Cart = () => {
  const { cartData, removeProduct, removeList } = useCartContext();
  const totalPrecio = cartData.reduce((prev, next) => {
    return prev + next.quantity * next.precio;
  }, 0);

  const createOrder = () => {
    const itemsForDB = cartData.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.quantity,
    }));

    let order = {
      buyer: {
        nombre: "que le importa xd",
        phone: "1234567891",
        email: "alejito@gmail.com",
      },
      items: itemsForDB,
      total: totalPrecio,
    };
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(DB, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
    createOrderInFirestore()
      .then((result) => {
        alert("tu orden ha sido creada con el id" + result.id);
        cartData.forEach(async (item) =>{
          const itemRef = doc(DB, "productos", item.id)
          await updateDoc(itemRef, {
            stock: increment(-item.quantity)
          })
        })
        removeList(cartData);
      })
      .catch((err) => console.log());
  };

  return (
    <div className="cartContainer">
      {console.log(cartData)}
      <div className="cartTittle">
        <h2>Tu carrito</h2>
        <hr />
      </div>
      <div className="cartBottom">
        <Button as={Link} to="/" className="continue">
          Continuar comprando
        </Button>
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
            <Row>
              <Col xs={8}>
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
                      <Col
                        m={4}
                        className="itemPrice"
                      >{`$ ${props.precio}`}</Col>
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
              </Col>
              <Col>
                {/* desde aqui está la orden */}
                <Summary>
                  <SummaryTitle>RESUMEN DE PEDIDO</SummaryTitle>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>{totalPrecio}</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Taxes</SummaryItemText>
                    <SummaryItemPrice>{totalPrecio * 0.19}</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Taxes Discount</SummaryItemText>
                    <SummaryItemPrice>{-(totalPrecio * 0.19)}</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>{totalPrecio}</SummaryItemPrice>
                  </SummaryItem>
                  <Button variant="success" onClick={createOrder}>
                    FINALIZAR COMPRA
                  </Button>
                </Summary>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default Cart;
