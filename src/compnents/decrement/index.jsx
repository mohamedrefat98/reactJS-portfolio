import React from "react";
import { useDispatch } from "react-redux";
import {decrease} from "./../../redux/features/counterSlice"
function Decrement() {

  const dispatch = useDispatch();
  const onDecrease = ()=>{
    dispatch(decrease())
  }

  return (
    <>
      <button
        className="btn btn-danger px-3 py-1 mx-2"
        onClick={onDecrease}
      >
        -
      </button>
    </>
  );
}
export default Decrement;
