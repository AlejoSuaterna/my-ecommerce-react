import ItemList from "../ItemList/ItemList";
import Data from "../../Data/Data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  const getFetch = new Promise((res) => {
    if (true) {
      setTimeout(() => {
        res(Data);
      }, 500);
    }
  });

  useEffect(() => {
    getFetch
      .then((res) => {
        if (categoryId) {
          setData(res.filter((products) => products.categoria == categoryId));
        } else setData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  // useEffect(() => {
  //   getFetch
  //     .then((resp) => setData(resp))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [categoryId]);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemList data={data}></ItemList>}
    </div>
  );
}

export default ItemListContainer;
