import React from "react";
const Increment= (props)=>{
    return (<>
    <button className="btn btn-primary px-5 py-2 mx-2" onClick={props.increase}>+</button>
    </>)
}
export default Increment;