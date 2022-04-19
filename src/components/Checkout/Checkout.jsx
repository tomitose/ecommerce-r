import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFireStore from "../../hooks/useFireStore";
import CheckoutLastCard from "./CheckoutLastCard/CheckoutLastCard";

export default function Checkout() {
  const { addOrder} = useFireStore();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    buyer: {
      name: "",
      lastname: "",
      cel: "",
      adress: "",
      email: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [name]: value,
      },
    });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginTop: "100px",
          borderStyle: "groove",
          display: "inline-block",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <TextField
          name="name"
          onChange={handleChange}
          value={form.buyer.name}
          required
          style={{ marginTop: "20px" }}
          fullWidth
          label="Name:"
        />
        <TextField
          name="lastname"
          onChange={handleChange}
          value={form.buyer.lastname}
          required
          style={{ marginTop: "20px" }}
          fullWidth
          label="Last name:"
        />
        <TextField
          name="cel"
          onChange={handleChange}
          value={form.buyer.cel}
          required
          style={{ marginTop: "20px" }}
          fullWidth
          label="Cel:"
        />
        <TextField
          name="adress"
          onChange={handleChange}
          value={form.buyer.adress}
          required
          style={{ marginTop: "20px" }}
          fullWidth
          label="Adress:"
        />
        <TextField
          name="email"
          onChange={handleChange}
          value={form.buyer.email}
          required
          style={{ marginTop: "20px" }}
          fullWidth
          label="E-mail:"
        />
        <Link to={"/checkoutcard"}>
          <Button
            disabled={sending}
            style={{ marginTop: "20px" }}
            variant="contained"
            color="success"
            onClick={async (e) => {
              if (form.buyer.name === "") {
                alert("Add Name");
                e.preventDefault();
                return;
              }
              if (form.buyer.lastname === "") {
                alert("Add Lastname");
                e.preventDefault();
                return;
              }
              if (form.buyer.cel === "") {
                alert("Add Cel");
                e.preventDefault();
                return;
              }
              if (form.buyer.adress === "") {
                alert("Add Adress");
                e.preventDefault();
                return;
              }
              if (form.buyer.email === "") {
                alert("Add Email");
                e.preventDefault();
                return;
              }

              setSending(true);
              let inserted = await addOrder(
                form.buyer.name,
                form.buyer.lastname,
                form.buyer.cel,
                form.buyer.adress,
                form.buyer.email
              );
              if (inserted) {
                return <CheckoutLastCard form={form}/>;
              } else {
                alert("Error");
              }
            }}
          >
            Buy
          </Button>
        </Link>
      </Box>
    </div>
  );
}
