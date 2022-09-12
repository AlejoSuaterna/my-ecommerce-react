import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"
const ItemList = ({ data }) => {
  return (
    <div className="row align-items-start">
      {data.map((data) => {
        return <Item  key={data.id} {...data} />;
      })}
    </div>
  );
};

export default ItemList;
