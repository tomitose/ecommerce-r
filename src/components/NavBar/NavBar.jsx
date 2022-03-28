import React from "react";
import { GiConverseShoe } from "react-icons/gi";
import { Navbar, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "typeface-raleway";

const NavBar = () => {
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
      </NavbarCollapse>

      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
