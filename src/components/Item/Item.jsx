import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <Card.Img src={prod.img} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
        </Card.Body>
        <Link to={`/product/${prod.id}`}>
          {" "}
          <Button variant="success">Info</Button>{" "}
        </Link>
      </Card>
    </div>
  );
};

export default Item;
