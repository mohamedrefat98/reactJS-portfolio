import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";

const Product = () => {
  let {id} = useParams();
  let [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  return (
    <>
      {product ? (
        <Card className="mx-auto w-50 my-5">
          <div className="overflow-hidden">
            <Card.Img variant="top" src={product.image} />
          </div>
          <Card.Body>
            <Card.Title className="my-3">{product.title}</Card.Title>
            <Card.Text className="text-primary">{product.price} EGP</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Spinner
          className="mx-auto d-block my-5"
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default Product;
