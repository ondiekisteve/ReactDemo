import React from "react";

const Cynthia2 = (props) => {
    return React.createElement(
        'h2',
        {id: 'something'},
        React.createElement('p',null,"This is another test "+props.name)
    )
}
export default Cynthia2