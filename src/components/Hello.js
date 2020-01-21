import React from "react";
const Hello = () => {
    return React.createElement(
        'div',
        {id: 'hello'},
        React.createElement('h1',{className:'sometext'}, 'Hello this is working')
    )
}
export default Hello