import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../App.css";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" id="navo">
        <NavbarBrand tag="div">
          <Link to="/" className="routerLink">
            <img src="/mylogo.png" style={{ height: "40px" }}></img> Hamsters
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavItem
            style={{ color: "white", listStyle: "none", cursor: "pointer" }}
          >
            <Link className="routerLink" to="/upload">
              Add Hamster
            </Link>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
