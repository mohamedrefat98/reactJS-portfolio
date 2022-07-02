import React from "react";
import ContactUs from "../../compnents/contactUs";
import NavbarComponent from "../../compnents/navbar";
import Shop from "../../compnents/shop";
import Counter from "../counter/counter";
import Home from "../home/Home";
import Product from "../../product";
import Todo from '../todo/Todo'
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
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/shop/:id" element={<Product />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default RoutesComponent;
