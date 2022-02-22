import React from "react";
import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getFetch } from "../services/getFetch";
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);

  const {categoryId} = useSearchParams();

  useEffect(() => {

    if(categoryId) {
      getFetch
      .then (res => {
        setProduct(res.filter(prod => prod.category === categoryId))
      })
      .catch (error => alert( "Error:", error));
    }

    else{     
      getFetch 
      .then ( res => {
        setProduct(res)
      })
      .catch (error => alert( "Error:", error));
    }
  },[categoryId])
    
  

  return (
    <div className="Card-Item-List-Container">
      <ItemList  product={product}/>
    </div>
  )

  }
export default ItemListContainer;
