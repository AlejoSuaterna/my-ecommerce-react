import ItemList from "../ItemList/ItemList";
import Data from "../../Data/Data";
import { useState, useEffect } from "react";

function ItemListContainer(props) {
  const getFetch = new Promise((res, rej) => {
    if (true) {
      setTimeout(() => {
        res(Data);
      }, 2000);
    }
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((resp) => setData(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  });

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemList data={data}></ItemList>}
      {/* <Container>
        <Row>
          <Col>
            <div align="center">
              <ItemCount stock= "15"></ItemCount>
            </div>
          </Col>
          <Col>
            <div align="center">
              <ItemCount stock= "15"></ItemCount>
            </div>
          </Col>
          <Col>
            <div align="center">
              <ItemCount stock= "15"></ItemCount>
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default ItemListContainer;
