import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link className="nav-link" to="/">Portofolio</Link></Navbar.Brand>
          <Nav className="ms-auto">
            <Link className="ms-3 nav-link" to="/">
              Home
            </Link>
            <Link className="ms-3 nav-link" to="/about">
              About
            </Link>
            <Link className="ms-3 nav-link" to="/shop">
              Shop
            </Link>
            <Link className="ms-3 nav-link" to="counter">
              Counter
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
