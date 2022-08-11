import ItemList from "../ItemList/ItemList";
import Data from "../../Data/Data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const getFetch = new Promise((res) => {
    if (true) {
      setTimeout(() => {
        res(Data);
      }, 500);
    }
  });

  const getProductsByCategory = new Promise((res, rej) => {
    setTimeout(() => {
      res(Data.filter((prod) => prod.categoria === categoryId));
    }, 500);
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) {
      getFetch
        .then((resp) => setData(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getProductsByCategory(categoryId).then((data) => {
        setData(data);
      });
    }
  },[categoryId]);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemList data={data}></ItemList>}
    </div>
  );
}

export default ItemListContainer;
