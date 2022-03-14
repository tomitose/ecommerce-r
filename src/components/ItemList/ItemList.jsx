import React from "react";
import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({product}) => {
  return (
      
    product.map(prod => <Item key={prod.id} prod={prod}/>)
    
  );
};

export default ItemList;
