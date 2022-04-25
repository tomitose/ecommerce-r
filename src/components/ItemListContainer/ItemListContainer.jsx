import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFireStore from "../../hooks/useFireStore";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { product, getData } = useFireStore();
  let { categoryId } = useParams();
  
  useEffect(() => {
    getData(categoryId)
  }, [categoryId]);

  return (
    <div className="Card-Item-List-Container">
      <ItemList product={product} />
    </div>
  );
};

export default ItemListContainer;
