import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cartList } = useCartContext();

  return (
    <Link
      to={"/cart"}
      className="btn"
      style={{
        color: "ButtonFace",
        textDecoration: "none",
        marginRight: "20px",
      }}
    >
      <FontAwesomeIcon icon={faShoppingCart} className="CartLogo" />
      {cartList.length}
    </Link>
  );
};

export default CartWidget;
