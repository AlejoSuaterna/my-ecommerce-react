import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { DB } from "../../Data/DataFireBase";
import "./itemListContainer.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const colRef = collection(DB, "productos");

    if (categoryId) {
      // con categoria
      const colFilterRef = query(colRef, where("categoria", "==", categoryId));
      getDocs(colRef).then((res) =>
        setData(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      );
      getDocs(colFilterRef).then((res) =>
        setData(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      );
    } else {
      // si no hay categoria
      getDocs(colRef).then((res) =>
        setData(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      );
    }
  }, [categoryId]);

  return (
    <div className="contenedor__prod">
      {Array.isArray(data) && data.length === 0 ? (
        <div className="loading">Cargando productos...</div>
      ) : (
        <ItemList data={data} />
      )}
    </div>
  );
}

export default ItemListContainer;
