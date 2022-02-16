import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

const Item = ({ name,price,stock,img }) => {
  return (
    <div>
        <Card style={{ width: "20rem" }}>
          <Card.Img src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Cantidad</Card.Text>
            <ItemCount stock={stock} initial={1} />
          </Card.Body>
          <Card.Subtitle style={{ textAlign:"start", paddingLeft:"30px" }}>Precio: ${price}</Card.Subtitle>
        </Card>
    </div>
  );
};

export default Item;
