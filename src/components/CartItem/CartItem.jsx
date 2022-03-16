import React from "react";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import "./CartItem.css";

const CartItem = ({ items }) => {
  return (
    <div class="card mb-3" className="cardContainer">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={items.img} class="img-fluid rounded-start" alt="item" />
        </div>
        <div>
          <div class="card-body" className="cardItemsCont">
            <h4 class="card-title" className="cardName">
              {items.name}
            </h4>
            <p>Amount: {items.length}</p>
            <h5>Total price: ${items.price}</h5>
            
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
