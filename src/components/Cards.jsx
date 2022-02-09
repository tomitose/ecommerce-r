import React from "react";
import { Card } from 'react-bootstrap';
import ItemCount from "./ItemCount";

const Cards = ({title}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Cantidad
        </Card.Text>
        <ItemCount initial= {1}/>
      </Card.Body>
    </Card>
  );
};

export default Cards;
