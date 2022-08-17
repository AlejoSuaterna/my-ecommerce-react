import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemCount(props) {
  // const [contador, setContador] = useState(props.inicial);

  // function agregarAlContador() {
  //   if (contador >= props.stock) {
  //     alert(`El maximo de unidades es de: ${props.stock}`);
  //   } else {
  //     setContador(contador + 1);
  //   }
  // }

  // function restarAlContador() {
  //   if (contador > 0) {
  //     setContador(contador - 1);
  //   }
  // }

  const [contador, setContador] = useState(0);

  return (
    <div className="d-flex flex-row justify-content-center mt-2">
      <Card.Body>
        <Button
          variant="secondary"
          onClick={() => {
            contador > 0 ? setContador(contador - 1) : setContador(contador);
          }}
        >
          -
        </Button>
        <Button variant="secondary">{contador}</Button>
        <Button
          variant="secondary"
          onClick={() => {
            props.stock > contador
              ? setContador(contador + 1)
              : setContador(contador);
          }}
        >
          +
        </Button>
        <Card.Footer>
          <Button
            variant="primary"
            onClick={() => {
              props.onAddToCart();
            }}
          >
            Agregar al carrito
          </Button>
        </Card.Footer>
      </Card.Body>
    </div>
  );
}

export default ItemCount;
