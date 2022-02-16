import React from "react";
import Item from "./Item";

const ItemList = ({product}) => {
  return (
      
    product.map(prod => <Item key={prod.id} name={prod.name} img={prod.img} price={prod.price} stock={prod.stock}/>)
    
  );
};

export default ItemList;
