import ItemList from "../ItemList/ItemList";
// import { getProductsData } from "../../Data/Data";
import { collection, getDocs, query, where} from "firebase/firestore";
import { DB } from "../../Data/DataFireBase";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  // const getFetch = new Promise((res) => {
  //   if (true) {
  //     setTimeout(() => {
  //       res(Data);
  //     }, 500);
  //   }
  // });

  // useEffect(() => {
  //   // getFetch
  //   //   .then((res) => {
  //   //     if (categoryId) {
  //   //       setData(res.filter((products) => products.categoria == categoryId));
  //   //     } else setData  (res);
  //   //   })
  //   //   .catch((err) => console.log(err))
  //   //   .finally(() => setLoading(false));

  //   // setData([]);

  //   async function getD() {
  //     const productsPosta = await getProductsData(categoryId);
  //     setData(productsPosta);
  //   }

  //   getD();
  // }, [categoryId]);

  useEffect(()=>{

    const colRef = collection(DB, "productos");
  
    if(categoryId){
      // con categoria
      const  colFilterRef = query(colRef, 
        where('cat', '==', categoryId))
      getDocs(colRef)
      .then(res=> setData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
      )
      getDocs(colFilterRef)
      .then(res=> setData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
      )}else{
        // si no hay categoria
        getDocs(colRef)
        .then(res=> setData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
        )
      };  
    
  },[categoryId]);

  return (
    // <div>
    //   {loading ? <h2>Cargando...</h2> : <ItemList data={data}></ItemList>}
    // </div>
    <div className="item-list-container">
    {Array.isArray(data) && data.length === 0 ? (
        <div className="loading">Cargando productos...</div>
    ) : (
        <ItemList data={data} />
    )}
</div>
  );
}

export default ItemListContainer;
