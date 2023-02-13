import React from "react";
import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../uthlogo.png";


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
          {/* <Nav.Link to="/chat" as={NavLink}>
            {" "}
            Chat{" "}
          </Nav.Link> */}
          <Nav.Link to="/map" as={NavLink}>
            {" "}
            Map{" "}
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            {" "}
            About{" "}
          </Nav.Link>
          <Button
            style={{ width: "4rem", height: "3rem", position: "relative" }}
            className="square btn-success rounded-pill"
          >
            {" "}
            Login{" "}
          </Button>
        </Nav>
      </Container>
    </NavbarBS>
  );
};
