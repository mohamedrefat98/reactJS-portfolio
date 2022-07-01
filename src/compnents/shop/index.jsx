import React, { useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { getProducts } from "../../redux/features/shopSlice";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const products = useSelector(state=>state.shopReducer.products);
  const loading = useSelector(state=>state.shopReducer.loading);

  return (
    <div className="row">
      {!loading ? (
        products.map((item, index) => {
          return (
            <Link
              to={`/shop/${item.id}`}
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
                    {item.price} $
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          );
        })
      ) : 
        <Spinner
          className="mx-auto d-block my-5"
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }
    </div>
  );
};

export default Shop;
