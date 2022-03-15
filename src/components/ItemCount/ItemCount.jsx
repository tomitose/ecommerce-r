import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./ItemCount.css";

const ItemCount = ({initial, stock, onAdd, items}) => {
  const [contador, setContador] = useState(initial);

  const [changeButton, setChangeButton] = useState(false);

  const {addToCart} = useCartContext ()


  function counter() {
      setContador (contador+1) 
      if (contador >= stock) {
        setContador(contador);
        alert ("No hay más stock");
      }
  };

  function decrement () {
    setContador (contador -1)
    if (contador <= 1) {
      setContador(1);
    }
  };

  function handlerOnAdd() {
    onAdd(contador)
    setContador(initial)
    setChangeButton(true)
    addToCart(items)

    if (contador === 0){
      return contador
    }else
    alert(`La cantidad agregada es ${contador}`); // Template String se llama cuando tengo una Variable dentro de un String
  };

  return (
    <div className="ButtonAdd">
      <Button variant="success" onClick={() => decrement()}>-</Button>
      <h3 type="number"  style={{ width: "40px"}}>
        {contador}
      </h3> 
      <Button variant="success" onClick={() => counter()}>+</Button>

      { changeButton 
        ?  
        <Link to={"/cart"}>
          <Button variant="success" style={{alignSelf: "center", marginLeft:"30px"}}>Buy Now</Button>
        </Link>
        : <Button variant="success" onClick={() => handlerOnAdd()} style={{alignSelf: "center", marginLeft:"30px"}}>Add to Cart</Button>
      }      
    </div>
  );
};

export default ItemCount;
