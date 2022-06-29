import React from "react";
import { useState } from "react";
import Decrement from "../../compnents/decrement";
import Increment from "../../compnents/increment";
import "bootstrap/dist/css/bootstrap.min.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  function incCount() {
    setCounter(counter + 1);
  }
  function decCount() {
    setCounter(counter - 1);
  }
  return (
    <>
      <p className="fs-1 fw-bold text-center my-3">{counter}</p>
      <div className="text-center">
        <Increment increase={incCount} />
        <Decrement decrease={decCount} />
      </div>
    </>
  );
}
export default Counter;
