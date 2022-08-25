import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { DB } from "../../Data/DataFireBase";

export default function ItemDetailContainer() {
  const [data, setData] = useState({});
  const { prodId } = useParams();

  // useEffect(() => {
  //   getFetch
  //     .then((resp) => setData(resp.find((prod) => prod.id == prodId)))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [prodId]);

  useEffect(() => {
    const itemRef = doc(DB, "productos", prodId);
    getDoc(itemRef)
      .then((res) => setData({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(console.log());

    }, [prodId]);

  return (
    <div className="detailContainer">
      <h1>DETALLE DEL PRODUCTO</h1>
      <p>este es el numero del id recibido: {prodId}</p>
      <ItemDetail {...data} />
    </div>
  );
}
