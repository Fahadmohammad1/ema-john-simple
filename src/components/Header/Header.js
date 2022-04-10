import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="sticky-top">
      <Navbar className="nav-bg " expand="lg">
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
              <NavLink to="/shop" className="menu text-white me-4">
                Shop
              </NavLink>
              <NavLink to="/orderReview" className="menu text-white me-4">
                Order review
              </NavLink>
              <NavLink to="/inventory" className="menu text-white me-4">
                Manage Inventory
              </NavLink>
              <NavLink to="/login" className="menu text-white me-4">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
