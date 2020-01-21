import React from "react";

function DisplayResult(props) {
    return(
        <div>
            <button onClick={props.getSum}>Get Total</button>
        </div>
    )

}

export default DisplayResult