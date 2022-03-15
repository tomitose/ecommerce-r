import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useCartContext } from "../../../context/CartContext";
import ItemCount from "../../ItemCount/ItemCount";
import accounting from "accounting";
import "./ItemDetail.css";

const ItemDetail = ({ detail }) => {
  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(true);

  const { cartList, showList, addToCart } = useCartContext();
  console.log(showList);

  const onAdd = (cant) => {
    setCount(cant);
    addToCart({ ...detail, count: cant });
    console.log(cartList);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      setLoading(true);
    };
  }, []);

  console.log(count);

  return (
    <div>
      <Card
        className="border border-success cardCustom"
        style={{ alignItems: "center", marginTop: "20px" }}
      >
        {loading ? (
         <div class="text-center" style={{ marginLeft: "150px",marginRight: "150px" }}>
         <div class="spinner-border text-success" role="status">
           <span class="visually-hidden">Loading...</span>
         </div>
       </div>
        ) : (
          <Card.Img src={detail.img} className="CardImage" />
        )}
        <Card.Body className="CardItems">
          <Card.Title>{detail.name}</Card.Title>
          <Card.Text>{detail.description}</Card.Text>
          <Card.Subtitle style={{ textAlign: "start", paddingLeft: "30px" }}>
            Price: {accounting.formatMoney(detail.price)}
          </Card.Subtitle>
          <ItemCount stock={detail.stock} initial={1} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
