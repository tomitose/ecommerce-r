import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Checkout() {
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
      <TextField style={{marginTop:"20px"}} fullWidth label="Name:" />
      <TextField style={{marginTop:"20px"}} fullWidth label="Last name:" />
      <TextField style={{marginTop:"20px"}} fullWidth label="Cel:" />
      <TextField style={{marginTop:"20px"}} fullWidth label="Adress:" />
      <TextField style={{marginTop:"20px"}} fullWidth label="E-mail:" />

      <Button style={{marginTop:'20px'}} variant="contained" color='success' >Buy</Button>

    </Box>
    </div>
  );
}