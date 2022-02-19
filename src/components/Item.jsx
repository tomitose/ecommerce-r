import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({ prod }) => {
  return (
    <div>
        <Card style={{ width: "20rem" }}>
          <Card.Img src={prod.img} />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Text>Cantidad</Card.Text>
            <ItemCount stock={prod.stock} initial={1} />
          </Card.Body>
          <Card.Subtitle style={{ textAlign:"start", paddingLeft:"30px" }}>Precio: ${prod.price}</Card.Subtitle>
          <Link to={`/product/${prod.id}`}> <Button variant="success">Info</Button> </Link>
        </Card>
    </div>
  );
};

export default Item;
