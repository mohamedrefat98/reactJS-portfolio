import React from "react";
function Decrement (props){
    return (<>
    <button className="btn btn-danger px-5 py-2 mx-2" onClick={props.decrease}>-</button>
    </>)
}
export default Decrement;