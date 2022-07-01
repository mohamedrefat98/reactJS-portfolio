import React from "react";
import { useDispatch } from "react-redux";
import {increase} from '../../redux/features/counterSlice'
const Increment = () => {

  const dispatch = useDispatch();
  const onIncrease = ()=>{
    dispatch(increase())
  }

  return (
    <>
      <button
        className="btn btn-primary px-3 py-1 mx-2"
        onClick={onIncrease}
      >
        +
      </button>
    </>
  );
};
export default Increment;
