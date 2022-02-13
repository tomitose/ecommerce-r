import React from "react";
import { Card } from 'react-bootstrap';
import ItemCount from "./ItemCount";


const Item = ({prod}) => {
  return (
    <div>
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          Cantidad
        </Card.Text>
        <ItemCount stock={6} initial= {1}/>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Item;
