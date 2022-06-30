import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import {NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><NavLink className="nav-link" to="/">Portofolio</NavLink></Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className="ms-3 nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="ms-3 nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="ms-3 nav-link" to="/shop">
              Shop
            </NavLink>
            <NavLink className="ms-3 nav-link" to="counter">
              Counter
            </NavLink>
            <NavLink className="ms-3 nav-link" to="/todo">
              ToDo
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
