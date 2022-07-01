import React, { useState } from "react";
import Decrement from "../../compnents/decrement";
import Increment from "../../compnents/increment";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

function Counter() {
  const [submited,setSubmited] = useState(true) 
  const counter = useSelector(state=>state.counterReducer.count);
  console.log(counter);
  return (
    <>
    {
        submited
        ?
        <div className="my-5 ">
        <p className="fs-1  text-center my-3">{counter} $</p>
        <div className="text-center mt-5">
          <Increment />
          <Decrement />
        </div>
        <button className="d-block mx-auto btn btn-outline-dark my-3" onClick={()=>{setSubmited(false)}}>Submit</button>
      </div>
        :
        <div className=" my-5 fs-2 text-center"> Thanks For Your Support </div>
      
      }
    </>
  );
}
export default Counter;
