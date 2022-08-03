import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState, useEffect } from "react";

function Item(props) {
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
    <Card style={{ width: "18rem" }}>
      <div align="center">
        <Card.Img variant="top" />
        <img
          alt=""
          src={props.imagen}
          width="250"
          height="180"
          align="center"
        />
      </div>
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>Costo {props.precio} $</Card.Text>
        <Card.Text>Cantidad de stock {props.stock}</Card.Text>
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

export default Item;
