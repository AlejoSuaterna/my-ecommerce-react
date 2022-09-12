import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { DB } from "../../Data/DataFireBase";
import "./ItemDetailContainer.css"
export default function ItemDetailContainer() {
  const [data, setData] = useState({});
  const { prodId } = useParams();

  useEffect(() => {
    const itemRef = doc(DB, "productos", prodId);
    getDoc(itemRef)
      .then((res) => setData({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(console.log());

    }, [prodId]);

  return (
    <div className="detailContainer">
      <h1 className="espacio">DETALLE DEL PRODUCTO</h1>
      <div className="centrar">
      <ItemDetail {...data} />
      </div>
      
    </div>
  );
}
