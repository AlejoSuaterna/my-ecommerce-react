
import React from "react";
import Item from "../Item/Item";

function ItemList({ data }) {
  return (
    <div div class="row align-items-start">
      {data.map((data) => {
        return (
          <Item
            nombre={data.nombre}
            precio={data.precio}
            stock={data.stock}
            imagen={data.imagen}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
