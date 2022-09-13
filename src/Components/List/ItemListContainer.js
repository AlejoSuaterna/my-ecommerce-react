import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { DB } from "../../Data/DataFireBase";
import "../Css/main.css";
import { ClockLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(Array.isArray(data) && data.length === 0);
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);

  useEffect(() => {
    const colRef = collection(DB, "productos");

    if (categoryId) {
      // con categoria
      {
        loading ? (
          <div className="dotloader">
            <ClockLoader color={"#a10f19"} loading={loading} size={100} />
          </div>
        ) : (
          <div></div>
        );
      }
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
    <div className="contenedor_prod">
      {loading ? (
        <div className="dotloader">
          <ClockLoader color={"#a10f19"} loading={loading} size={100} />
        </div>
      ) : (
        <ItemList data={data} />
      )}
      
    </div>
  );
}

export default ItemListContainer;
