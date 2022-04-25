import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GiConverseShoe } from "react-icons/gi";
import { Navbar, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import CartWidget from "../CartWidget";
import "./NavBar.css";
import "typeface-raleway";
import { Link } from "react-router-dom";

const NavBar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar
      bg="success"
      variant="dark"
      expand="sm"
      collapseOnSelect
      style={{ fontFamily: "raleway" }}
    >
      <Navbar.Brand style={{ marginLeft: "20px" }}>
        <GiConverseShoe />
      </Navbar.Brand>
      <NavbarToggle />
      <NavbarCollapse>
        <Nav style={{ alignItems: "center" }}>
          <Link to={"/"} className="Btn">
            Home
          </Link>
        </Nav>
        
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Models
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Link to={`/category/vans`}><MenuItem onClick={handleClose}>Vans</MenuItem></Link>
        <Link to={`/category/adidas`}><MenuItem onClick={handleClose}>Adidas</MenuItem></Link>
        <Link to={`category/nike`}><MenuItem onClick={handleClose}>Nike</MenuItem></Link>
        <Link to={`category/reebok`}><MenuItem onClick={handleClose}>Reebok</MenuItem></Link>
        <Link to={`category/newbalance`}><MenuItem onClick={handleClose}>New Balance</MenuItem></Link>
      </Menu>
    
      </NavbarCollapse>

      <CartWidget />
    </Navbar>
  );
};

export default NavBar;



