import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { getProduct } from "../redux/features/productSlice";


const Product = () => {
  const dispatch = useDispatch();
  let {id} = useParams();
  let product = useSelector(state => state.productReducer.product);
  let loading = useSelector(state => state.productReducer.loading);
  console.log(product);
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  return (
    <>
      {!loading
       ? (
        <div className="d-flex my-5 border-0 align-items-center justify-content-between w-75 mx-auto">
          <div className=" overflow-hidden w-50" style={{height:'500px'}}>
            <img src={product.image} className="h-100" alt="prd image "/>
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
