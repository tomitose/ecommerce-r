import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CartItemTotal.css";
import { Link } from "react-router-dom";

export default function CartItemTotal(data) {
  let total = 0
  data.data.forEach(e => {
    total += e.count * e.price
  });
  return (
    <Card className="CardTotal" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Total: $ {total}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"/checkout"}>
          <Button
            style={{ marginTop: "20px" }}
            variant="contained"
            color="success"
          >
            Make order
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
