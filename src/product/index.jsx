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
        <div className="d-flex my-5 border-0 align-items-center justify-content-between w-75 mx-auto">
          <div className=" overflow-hidden w-50" style={{height:'500px'}}>
            <img src={product.image} className="h-100"/>
          </div>
          <div className=" border-1 w-50">
            <p className="my-3 fs-2">{product.title}</p>
            <p className="my-3 text-secondary">{product.description}</p>
            <p className="text-primary fs-3">{product.price} EGP</p>
            <button className="btn btn-success mt-4"> ADD TO CARD </button>
          </div>
        </div>
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
