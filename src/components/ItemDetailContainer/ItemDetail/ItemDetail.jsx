import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const ItemDetail = ( {item}) => {
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img  src={item.img}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.{item.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
  );
};

export default ItemDetail;
