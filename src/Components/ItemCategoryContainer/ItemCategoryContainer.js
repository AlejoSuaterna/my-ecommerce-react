import { useState, useEffect } from "react";
import Data from "../../Data/Data";
import { useParams } from "react-router-dom";
import ItemCategory from "../ItemCategory/ItemCategory";

export default function ItemDetailContainer() {

  const [producto, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  const getFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve(Data);
    }, 2000);
  });

  useEffect(() => {
    getFetch
      .then((resp) => setData(resp.filter(products => products.categoria == categoryId)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      <h1>PRODUCTO POR CATEGORIA</h1>
      <p>esta es la categoria recibida: {categoryId}</p>
      {loading ? <h2>Cargando categorias...</h2> : <ItemCategory {...producto} />}
    </div>
  );
}
