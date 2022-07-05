import { CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Checkmark } from "react-checkmark";
import { Button, Card } from "react-bootstrap";
import useFireStore from "../../../hooks/useFireStore";
import { Link } from "react-router-dom";

const CheckoutLastCard = (form) => {

  useEffect(()=>{
    submit()
   
  }, [])


  const { generateOrder,idOrd} = useFireStore();

  function submit () {
    generateOrder({datos:form})
  }

  


  return (
    <div style={{ minHeight: "100vh" }}>
      <Card className="CardTotal" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Checkout
          </Typography>
          <Checkmark size="medium" />
          <Typography gutterBottom variant="h5" component="div">
            Your Order {idOrd} has been done succesfully
          </Typography>
        </CardContent>
        <Link to="/">
          <Button className="m-5 p-2">Go back to buy !</Button>
        </Link>
      </Card>
    </div>
  );
};

export default CheckoutLastCard;
