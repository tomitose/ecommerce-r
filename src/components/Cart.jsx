import { useCartContext } from "../context/CartContext";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CartItem from "./CartItem/CartItem";
import CartItemTotal from "./CartItem/CartItemTotal/CartItemTotal";

const Cart = () => {
  const { cartList } = useCartContext();

  return (
    <div>
      {cartList.length < 1 ? (
        <Stack sx={{ width: "100%" }} spacing={2} style={{display:"flex", alignItems:"center", marginTop:"200px"}}>
          <Alert severity="info" style={{alignSelf:"center",fontSize:"30px"}}>No Products in the Cart !</Alert>
        </Stack>
      ) : (
        cartList.map((items) => <CartItem key={items.id} items={items} />)
      )}

      {cartList.length < 1 ? (<></>) : (<CartItemTotal/> )}
       
    </div>
  );
};

export default Cart;
