import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getFetch } from "../services/getFetch";
import ItemDetail from "./ItemDetail/ItemDetail";
import { getDoc,doc} from "firebase/firestore";
import db from "../services/firebase";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);

    const {productId} = useParams();

    const getDataDetail = async (id) => {
      try {
        const document = doc(db, "items", id);
        const resp = await getDoc(document);
        const result = { id: resp.id, ...resp.data() };
        setDetail(result);
      } catch (err) {
        console.log(err);
      }
    };

  useEffect(() => {
/*
    getFetch
    .then((response) => {
      setDetail(response.find( prod => prod.id === Number(productId) ));
    });
*/
  getDataDetail (productId)

  }, [productId]);


  


  return (
    <div>
      {detail&& <ItemDetail detail={detail} />}
    </div>
  );
};

export default ItemDetailContainer;
