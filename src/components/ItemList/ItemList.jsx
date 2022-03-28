import React from "react";
import Item from "../Item/Item";

const ItemList = ({ product }) => {
  return product.length === 0 ? (
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : (
    product.map((prod) => <Item key={prod.id} prod={prod} />)
  );
};

export default ItemList;
