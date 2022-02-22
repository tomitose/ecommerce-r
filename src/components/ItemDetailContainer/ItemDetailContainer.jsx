import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../services/getFetch";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);

    const {productId} = useParams();

  useEffect(() => {

    getFetch
    .then((response) => {
      setDetail(response.find( prod=>prod.id === Number(productId) ));
    });

  }, [productId]);

  return (
    <div>
      {detail&& <ItemDetail detail={detail} />}
    </div>
  );
};

export default ItemDetailContainer;
