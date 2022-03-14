import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import useFireStore from "../../hooks/useFireStore";

const ItemDetailContainer = () => {

    const {productId} = useParams();

    const {detailIndividual, getDataDetail} = useFireStore ();

  useEffect(() => {

  getDataDetail (productId)

  },[productId]);



  return (
    <div>
      {detailIndividual&&<ItemDetail detail={detailIndividual} />}
    </div>
  );
};

export default ItemDetailContainer;
