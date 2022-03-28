import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CartItemTotal.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartItemTotal(data) {
  let total = 0;
  data.data.forEach((e) => {
    total += e.count * e.price;
  });

  const { clearCart } = useCartContext();

  return (
    <Card className="CardTotal" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Total: $ {total}
        </Typography>
      </CardContent>
      <CardActions className="BtnContainer">
        <Link to={"/checkout"}>
          <Button
            style={{ marginTop: "20px" }}
            variant="contained"
            color="success"
          >
            Make order
          </Button>
        </Link>
        <Button
          color="warning"
          style={{
            color: "white",
            backgroundColor: "#e60000",
            marginTop: "20px",
          }}
          onClick={() => clearCart()}
        >
          Delete Cart
          <DeleteIcon style={{ fontSize: "x-large" }} />
        </Button>
      </CardActions>
    </Card>
  );
}
