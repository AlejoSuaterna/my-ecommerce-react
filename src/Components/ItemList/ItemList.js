import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data }) => {
  return (
    <div div class="row align-items-start">
      {data.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
};

export default ItemList;
