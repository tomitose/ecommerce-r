import React from "react";
import { useEffect,useState } from "react";
import { collection, getDocs } from "firebase/firestore";
//import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
//import { getFetch } from "../services/getFetch";
import './ItemListContainer.css';
import db from "../services/firebase";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);

  
  const getData = async () =>{
    try {
      const data = collection(db,"items")
      const col = await getDocs(data)
      const result = col.docs.map((doc) => doc ={id:doc.id,...doc.data()})
      setProduct(result)
    }
    catch (error) {
      console.log (error)
    }
  };

  useEffect(() =>{
    getData()
  },[])

  return (
    <div className="Card-Item-List-Container">
      <ItemList product={product}/>
    </div>
  )

}

export default ItemListContainer;











  /*const {categoryId} = useParams();

  
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
    
  */