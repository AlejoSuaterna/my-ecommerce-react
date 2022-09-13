import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { DB } from "../../Data/DataFireBase";
import "../Css/main.css";
import { ClimbingBoxLoader } from "react-spinners";

export default function ItemDetailContainer() {
  const [data, setData] = useState({});
  const { prodId } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);

  useEffect(() => {
    const itemRef = doc(DB, "productos", prodId);
    getDoc(itemRef)
      .then((res) => setData({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(console.log());
  }, [prodId]);

  return (
    <div className="detailContainer">
      {loading ? (
        <div className="dotloader">
          <ClimbingBoxLoader 
            color={"#a10f19"}
            loading={loading}
            size={25}
          />
        </div>
      ) : (
        <div>
          <h1 className="detalle-producto">DETALLE DEL PRODUCTO</h1>
          <div className="centrar-ItemDetail">
            <ItemDetail {...data} />
          </div>
        </div>
      )}
    </div>
  );
}
