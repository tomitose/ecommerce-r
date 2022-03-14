import React from "react";
import { GiConverseShoe } from "react-icons/gi";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="success" variant="dark" expand="sm" collapseOnSelect>
      <Navbar.Brand href="/" style={{ marginLeft: "20px" }}>
        <GiConverseShoe />
      </Navbar.Brand>
      <NavbarToggle />
      <NavbarCollapse>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Models" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Vans</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Nike</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Adidas</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">Today's Deal</Nav.Link>
          <Nav.Link href="#features">About us</Nav.Link>
        </Nav>
      </NavbarCollapse>

      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
