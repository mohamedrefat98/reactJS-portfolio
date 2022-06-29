import React from "react";
function Decrement({decrease}) {
  return (
    <>
      <button
        className="btn btn-danger px-5 py-2 mx-2"
        onClick={decrease}
      >
        -
      </button>
    </>
  );
}
export default Decrement;
