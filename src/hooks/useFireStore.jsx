import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import db from '../components/services/firebase';

const useFireStore = () => {

    const [product, setProduct] = useState([]);
    const [detailIndividual, setDetailIndividual] = useState ();


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
      detailIndividual      
  }
}

export default useFireStore