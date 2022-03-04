import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useCartContext } from "../../CartContext";
import ItemCount from "../../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ detail }) => {

  const [count, setCount] = useState (0);
  
  const {cartList, showList,addToCart} = useCartContext()
  console.log(showList)

  const onAdd = (cant) => {
    setCount(cant)
    addToCart({detail, count: cant})
    console.log (cartList)
  }
  
  console.log(count)


  return (
    <div>
      <Card className="border border-success" style={{ flexDirection: "row", alignItems: "center", marginTop: "20px"}}>
        <Card.Img src={detail.img} className="CardImage" />
        <Card.Body className="CardItems">
          <Card.Title>{detail.name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
          </Card.Text>
          <Card.Subtitle style={{ textAlign: "start", paddingLeft: "30px" }}>
            Price: ${detail.price}
          </Card.Subtitle>
          <ItemCount stock={detail.stock} initial={1} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
