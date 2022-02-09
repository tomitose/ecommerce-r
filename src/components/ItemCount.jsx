import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  function onAdd() {
      setContador (contador+1)
  }

  function res() {
    setContador (contador-1)
  }

  return (
    <div className="d-flex justify-content-center">
      <Button onClick={() => onAdd()}>+</Button>
      <h3 type="number" style={{ width: "40px"}}>
        {contador}
      </h3>
      <Button onClick={() => res()}>-</Button>
    </div>
  );
};

export default ItemCount;
