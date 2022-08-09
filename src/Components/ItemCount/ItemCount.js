import { useState } from "react";
import Button from "react-bootstrap/Button";

function ItemCount(props) {
  const [contador, setContador] = useState(props.inicial);

  function agregarAlContador() {
    if (contador >= props.stock) {
      alert(`El maximo de unidades es de: ${props.stock}`);
    } else {
      setContador(contador + 1);
    }
  }

  function restarAlContador() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center mt-2">
      <Button variant="secondary" onClick={restarAlContador}>
        -
      </Button>
      <Button variant="secondary">{contador}</Button>
      <Button variant="secondary" onClick={agregarAlContador}>
        +
      </Button>
    </div>
  );
}

export default ItemCount;
