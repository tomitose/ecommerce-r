import { useCartContext } from "../context/CartContext";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CartItem from "./CartItem/CartItem";
import CartItemTotal from "./CartItem/CartItemTotal/CartItemTotal";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { cartList } = useCartContext();

  return (
    <div style={{ minHeight: "100vh" }}>
      {cartList.length < 1 ? (
        <div>
          <Stack
            sx={{ width: "100%" }}
            spacing={2}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "200px",
            }}
          >
            <Alert
              severity="info"
              style={{ alignItems: "center", fontSize: "30px" }}
            >
              No Products in the Cart !
            </Alert>
          </Stack>
          <Link to={"/"}>
            <Button variant="success" style={{ marginTop: "200px" }}>
              Go back to buy
            </Button>
          </Link>
        </div>
      ) : (
        cartList.map((items) => <CartItem key={items.id} items={items} />)
      )}

      {cartList.length < 1 ? <></> : <CartItemTotal data={cartList} />}
    </div>
  );
};

export default Cart;
