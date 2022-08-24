import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Data from "../../Data/Data";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { DB } from "../../Data/DataFireBase";

export default function ItemDetailContainer() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { prodId } = useParams();

  const getFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve(Data);
    }, 500);
  });

  // useEffect(() => {
  //   getFetch
  //     .then((resp) => setData(resp.find((prod) => prod.id == prodId)))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [prodId]);

  useEffect(() => {
    const dbDoc = doc(DB, "producto", prodId);
    getDoc(dbDoc)
      .then((res) => setData({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(console.log());
  }, [prodId]);

  return (
    // <div>
    //   <h1>DETALLE DEL PRODUCTO</h1>
    //   <p>este es el numero del id recibido: {prodId}</p>
    //   {loading ? <h2>Cargando detalles...</h2> : <ItemDetail {...data} />}
    // </div>
    <div className="detailContainer">
      <h1>DETALLE DEL PRODUCTO</h1>
      <p>este es el numero del id recibido: {prodId}</p>
      <ItemDetail {...data} />
    </div>
  );
}
