import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <div className="row">
      {products ? (
        products.map((item, index) => {
          return (
            <Link
              to={`/product/${item.id}`}
              className="my-3 col-4 px-3"
              key={index}
            >
              <Card style={{ height: "600px" }}>
                <div style={{ height: "500px" }} className="overflow-hidden">
                  <Card.Img variant="top" src={item.image} />
                </div>
                <Card.Body>
                  <Card.Title className="my-3">{item.title}</Card.Title>
                  <Card.Text className="text-primary">
                    {item.price} EGP
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          );
        })
      ) : (
        <Spinner
          className="mx-auto d-block my-5"
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Shop;
