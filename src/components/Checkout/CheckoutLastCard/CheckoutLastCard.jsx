import { CardContent, Typography } from "@mui/material";
import React from "react";
import { Checkmark } from "react-checkmark";
import { Card } from "react-bootstrap";

const CheckoutLastCard = ({order}) => {
  setTimeout(() => {
    window.location.replace("/");
  }, 3000);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Card className="CardTotal" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Checkout
          </Typography>
          <Checkmark size="medium" />
          <Typography gutterBottom variant="h5" component="div">
            Your Order {order.order} has been done succesfully
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutLastCard;
