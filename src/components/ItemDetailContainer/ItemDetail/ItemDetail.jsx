import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../../ItemCount";

const ItemDetail = ({ detail }) => {

  return (
    <div>
      <Card className="border border-success" style={{ flexDirection: "row", alignItems: "center", marginTop: "20px"}}>
        <Card.Img src={detail.img} style={{ width: "500px" }} />
        <Card.Body>
          <Card.Title>{detail.name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content.{detail.price}
          </Card.Text>
          <Card.Subtitle style={{ textAlign: "start", paddingLeft: "30px" }}>
            Price: ${detail.price}
          </Card.Subtitle>
          <ItemCount stock={detail.stock} initial={1} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
