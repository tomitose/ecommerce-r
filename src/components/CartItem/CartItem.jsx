import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./CartItem.css";
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ items }) => {
  const { removeItem } = useCartContext();

  console.log(items);

  return (
    <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={items.img} alt="shoes" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {items.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Amount: {items.count}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Total price: ${items.price}
          </Typography>
        </CardContent>
        <Stack
          className="trashButton"
          direction="row"
          alignItems="center"
          spacing={1}
        >
          <IconButton
            onClick={() => removeItem(items.id)}
            aria-label="delete"
            size="large"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Card>
    </div>
  );
};

export default CartItem;
