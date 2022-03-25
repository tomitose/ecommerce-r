import { collection, doc, getDoc, getDocs, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import db from '../components/services/firebase';
import { useCartContext } from '../context/CartContext';

const useFireStore = () => {

    const [product, setProduct] = useState([]);
    const [detailIndividual, setDetailIndividual] = useState ();
    const {clearCart} = useCartContext()


    const getData = async () =>{
        try {
          const data = collection(db,"items")
          const col = await getDocs(data)
          const result = col.docs.map((doc) => doc ={id:doc.id,...doc.data()})

          return setProduct(result)
        }
        catch (error) {
          console.log (error)
        }
      };

      const addOrder = async (name, lastname, cel, adress, email) =>{
        try {
          const data = collection(db,"order")
          await addDoc(data, {name, lastname, cel, adress, email, order: localStorage.getItem("cartList")})
          console.log("INSERTADO")
          clearCart()
          return true
        }
        catch (error) {
          return false
        }
      };


      const getDataDetail = async (id) => {
        try {
          const document = doc(db, "items", id);
          const resp = await getDoc(document);
          const result = { id: resp.id, ...resp.data() };
          setDetailIndividual(result);
        } catch (error) {
          console.log(error);
        }
      };

  return {
      getData,
      product,
      getDataDetail,
      detailIndividual,
      addOrder   
  }
}

export default useFireStore