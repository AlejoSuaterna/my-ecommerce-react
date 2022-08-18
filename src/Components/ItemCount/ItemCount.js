import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemCount(props) {
  const [contador, setContador] = useState(Number(props.inicial));

  const onAdd = () => {
    console.log(`${contador} agregados al carrito!`);
    props.onAddToCart(contador);
  };

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
            onClick={onAdd}
          >
            Agregar al carrito
          </Button>
        </Card.Footer>
      </Card.Body>
    </div>
  );
}

export default ItemCount;
