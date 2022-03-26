import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import useFireStore from "../../hooks/useFireStore";

export default function Checkout() {
  const {addOrder} = useFireStore ();
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({
    buyer: {
      name: "",
      lastname: "",
      cel: "",
      adress: "",
      email: ""
    }
  })

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



  //const {buyer:{name,lastname, cel, adress, email}} = form
  return (
    <div style={{minHeight:"100vh"}}>
    <Box 
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: "100px",
        borderStyle: 'groove',
        display: 'inline-block',
        padding: '40px',
        borderRadius: '10px'
      }}
    >
      <TextField name="name" onChange={handleChange} value={form.buyer.name} required style={{marginTop:"20px"}} fullWidth label="Name:" />
      <TextField name="lastname" onChange={handleChange} value={form.buyer.lastname} required style={{marginTop:"20px"}} fullWidth label="Last name:" />
      <TextField name="cel" onChange={handleChange} value={form.buyer.cel} required style={{marginTop:"20px"}} fullWidth label="Cel:" />
      <TextField name="adress" onChange={handleChange} value={form.buyer.adress} required style={{marginTop:"20px"}} fullWidth label="Adress:" />
      <TextField name="email" onChange={handleChange} value={form.buyer.email} required style={{marginTop:"20px"}} fullWidth label="E-mail:" />

      <Button disabled={sending} style={{marginTop:'20px'}} variant="contained" color='success' onClick={
        async ()=> {
          if(form.buyer.name === ""){
            alert("Add Name");
            return
          }
          if(form.buyer.lastname === ""){
            alert("Add Lastname");
            return
          }
          if(form.buyer.cel === ""){
            alert("Add Cel");
            return
          }
          if(form.buyer.adress === ""){
            alert("Add Adress");
            return
          }
          if(form.buyer.email === ""){
            alert("Add Email");
            return
          }
          setSending(true)
          let inserted = await addOrder(form.buyer.name,form.buyer.lastname,form.buyer.cel,form.buyer.adress,form.buyer.email)
          if(inserted){


            alert("ORDER SAVED SUCCESSFULLY")

            setTimeout(() => {
              window.location.replace("/")
            }, 2000);

          }
          else{
            alert("Error")
          }
        }
      }>Buy</Button>

    </Box>
    </div>
  );
}