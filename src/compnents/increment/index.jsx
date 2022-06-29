import React from "react";
const Increment = ({increase}) => {
  return (
    <>
      <button
        className="btn btn-primary px-5 py-2 mx-2"
        onClick={increase}
      >
        +
      </button>
    </>
  );
};
export default Increment;
