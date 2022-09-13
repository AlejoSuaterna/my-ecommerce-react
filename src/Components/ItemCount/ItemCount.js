import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Css/ItemCount.css"
function ItemCount(props) {
  const [contador, setContador] = useState(Number(props.inicial));

  const onAdd = () => {
    props.onAddToCart(contador);
  };

  return (
    
      <Card.Body>
      
      <Card.Body className ="px-2">
        <Button className ="boton1"
          variant="secondary"
          onClick={() => {
            contador > 1 ? setContador(contador - 1) : setContador(contador);
          }}
        >
          -
        </Button>

        
        <Button variant="secondary">{contador}</Button>
        <Button className ="boton2"
          variant="secondary"
          onClick={() => {
            props.stock > contador
              ? setContador(contador + 1)
              : setContador(contador);
          }}
        >
          +
        </Button>
        </Card.Body>
        
        <Card.Footer>
          <Button className ="boton3"
            variant="info"
            onClick={onAdd}
          >
            Agregar al carrito
          </Button>
        </Card.Footer>
      </Card.Body>
   
  );
}

export default ItemCount;
