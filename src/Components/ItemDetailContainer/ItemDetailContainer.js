import { useState, useEffect } from "react";
import { getProductById } from "../../Data/Data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [producto, setproducto] = useState({});
  const { prodId } = useParams();

  useEffect(() => {
    getProductById(prodId)
      .then((producto) => {
        setproducto(producto);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [prodId]);

  return (
    <div>
      <h1>Detalle</h1>
      <ItemDetail {...producto} />
    </div>
  );
}
