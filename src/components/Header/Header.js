import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="nav-bg" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="ema-john logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-white" href="#home">
                Order
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Order review
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                Manage Inventory
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

<h2>this is header</h2>;
