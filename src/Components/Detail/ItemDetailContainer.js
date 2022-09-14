import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { DB } from "../../Data/DataFireBase";
import "../Css/main.css";
import { ClockLoader } from "react-spinners";
import Button from 'react-bootstrap/Button';

export default function ItemDetailContainer() {
  const [data, setData] = useState({});
  const [carga, setCarga] = useState(false);
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
      .then((res) =>
        res.data() === undefined
          ? setCarga(true)
          : setData({ id: res.id, ...res.data() })
      )
      .catch((err) => console.log(err))
      .finally(console.log());
  }, [prodId, carga]);

  return (
    <div className="detailContainer">
      {loading ? (
        <div className="dotloader">
          <ClockLoader color={"#a10f19"} loading={loading} size={100} />
        </div>
      ) : carga ? (
        <div>
          <Button
            className="button__stock"
            variant="danger"
            size="lg"
            disabled={true}
          >
            Lo sentimos, no encontramos el producto indicado
          </Button>
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
