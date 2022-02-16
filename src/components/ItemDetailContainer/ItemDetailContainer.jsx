import React, { useEffect, useState } from "react";
import { getFetch } from "../services/getFetch";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);

  useEffect(() => {
    getFetch.then((res) => {
      setDetail(res);
    });
  }, []);

  return (
    <div>
      <ItemDetail detail={detail}/>
    </div>
  );
};

export default ItemDetailContainer;
