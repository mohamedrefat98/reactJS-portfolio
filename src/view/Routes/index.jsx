import React from "react";
import About from "../../compnents/about";
import NavbarComponent from "../../compnents/navbar";
import Shop from "../../compnents/shop";
import Counter from "../counter/counter";
import Home from "../home/Home";
import Product from "../../product";
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const RoutesComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default RoutesComponent;
