import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Data from "../../Data/Data";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {

  const [producto, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { prodId } = useParams();

  const getFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve(Data);
    }, 500);
  });

  useEffect(() => {
    getFetch
      .then((resp) => setData(resp.find((prod) => prod.id == prodId)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [prodId]);

  return (
    <div>
      <h1>DETALLE DEL PRODUCTO</h1>
      <p>este es el numero del id recibido: {prodId}</p>
      {loading ? <h2>Cargando detalles...</h2> : <ItemDetail {...producto} />}
    </div>
  );
}
