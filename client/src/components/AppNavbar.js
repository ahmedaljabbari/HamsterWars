import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import "../App.css";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" id="navo">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="LogoLink" to="/">
                <img src="/logooo.png" style={{width:"40px"}}></img> HamsterWars</Link>
            </NavItem>
            <NavItem>
              <Link className="routerLink" to="/battle">Battles</Link>
            </NavItem>
            <NavItem>
              <Link className="routerLink" to="/stats">Statics</Link>
            </NavItem>
            <NavItem>
              <Link className="routerLink" to="/hamster">Hamster</Link>
            </NavItem>
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
