import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState, useEffect } from "react";
import ia from "../Image/IA.png";

function ItemCount(props) {
  const [contador, setContador] = useState(
    props.initial > 0 ? props.initial : 0
  );

  useEffect(() => {
    console.log("%c    Renderizado Siempre", "color: #38761d");
    return () => {
      console.log("Contador listo para ser cleanup!");
    };
  });
  useEffect(() => {
    console.log("%c    >>>>> Renderizado Contador", "color: #00761d");
    return () => {
      console.log("Contador listo para ser cleanup!");
    };
  }, [contador]);
  useEffect(() => {
    console.log("%c    >>>>> Renderizado contador2", "color: #38001d");
    return () => {
      console.log("Contador listo para ser cleanup!");
    };
  }, []);

  function agregarAlContador() {
    setContador(contador < props.stock ? contador + 1 : contador);
    console.log(contador);
  }

  function quitarAlContador() {
    setContador(contador > 0 ? contador - 1 : contador);
    console.log(contador);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <div align="center">
        <Card.Img variant="top" />
        <img alt="" src={ia} width="250" height="180" align="center" />{" "}
      </div>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>This is a text that will be replace.</Card.Text>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={quitarAlContador}>
            -
          </Button>
          <Button variant="secondary">{contador}</Button>
          <Button variant="secondary" onClick={agregarAlContador}>
            +
          </Button>
        </ButtonGroup>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Footer>
    </Card>
  );
}

export default ItemCount;
