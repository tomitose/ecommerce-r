import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({initial, stock}) => {
  const [contador, setContador] = useState(initial);

  function counter() {
      setContador (contador+1) 
      if (contador >= stock) {
        setContador(contador);
        alert ("No hay más stock");
      }
  };

  function decrement () {
    setContador (contador -1)
    if (contador <= 0) {
      setContador(0);
    }
  };

  function onAdd() {
    if (contador === 0){
      return contador
    }else
    alert(`La cantidad agregada es ${contador}`); // Template String se llama cuando tengo una Variable dentro de un String
  };

  return (
    <div className="d-flex justify-content-center" style={{height:"36px"}}>
      <Button onClick={() => decrement()}>-</Button>
      <h3 type="number" style={{ width: "40px"}}>
        {contador}
      </h3> 
      <Button onClick={() => counter()}>+</Button>
      <Button onClick={() => onAdd()} style={{alignSelf: "center", marginLeft:"30px"}}>Add to Cart</Button>
    </div>
  );
};

export default ItemCount;
