import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState, useEffect } from "react";

function ItemCount(props) {

  const [contador, setContador] = useState((props.initial > 0 ? props.initial : 0));

  useEffect(() => {
    console.log('%c    Renderizado Siempre', 'color: #38761d');
    return () => {
        console.log('Contador listo para ser cleanup!');
    }        
});
useEffect(() => {
    console.log('%c    >>>>> Renderizado Contador', 'color: #00761d');
    return () => {
        console.log('Contador listo para ser cleanup!');
    }
}, [contador]);
useEffect(() => {
    console.log('%c    >>>>> Renderizado contador2', 'color: #38001d');
    return () => {
        console.log('Contador listo para ser cleanup!');
    }
}, []);


  function agregarAlContador() {
    setContador((contador < props.stock ? contador + 1 : contador));
    console.log(contador);
  }

  function quitarAlContador() {
    setContador((contador > 0 ? contador - 1 : contador ));
    console.log(contador);
  }

  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
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
          <button>Agregar al carrito</button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default ItemCount;
