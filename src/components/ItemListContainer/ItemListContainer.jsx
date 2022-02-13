import React from "react";
import ItemList from "../ItemList";
import { useEffect,useState } from "react";
import { getFetch } from "../services/getFetch";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
      getFetch 
      .then ( res =>{
        setProduct(res)
      })
    },[]);


  return (
    <div>
      <ItemList product={product}/>
    </div>
  );
};

export default ItemListContainer;
