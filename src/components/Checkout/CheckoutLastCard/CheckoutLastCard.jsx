import { CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Checkmark } from "react-checkmark";
import { Card } from "react-bootstrap";
import useFireStore from "../../../hooks/useFireStore";

const CheckoutLastCard = (form) => {

  useEffect(()=>{
    submit()
   
  }, [])


  const { generateOrder,idOrd} = useFireStore();

  function submit () {
    generateOrder({datos:form})
  }

  

  setTimeout(() => {
    window.location.replace("/");
  }, 4000);


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
      </Card>
    </div>
  );
};

export default CheckoutLastCard;
