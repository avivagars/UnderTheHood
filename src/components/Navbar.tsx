import React from "react";
import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../uthlogo.png";
import { Auth } from "../components/Auth";


export function Navbar() {
  return (
    <NavbarBS sticky="top" className="mb-5 bg-white shadow-sm">
      <Container className="me-auto">
        <img src={logo} alt="logo" width="200" />
      </Container>
      <Container className="fs-4">
        <Nav className="ms-auto">
          <Nav.Link to="/" as={NavLink}>
            {" "}
            Home{" "}
          </Nav.Link>
          <Nav.Link to="/map" as={NavLink}>
            {" "}
            Map{" "}
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            {" "}
            About{" "}
          </Nav.Link>
          <Auth/>
        </Nav>
      </Container>
    </NavbarBS>
  );
};
