import React, {Component} from "react";

class InlineStyling extends Component{

    render() {
        const heading ={
            fontSize: '34px',
            color: 'red'

        }
        return(
            <div>
                <h1 style={heading}>Testing css styles</h1>
            </div>
        )
    }

}

export default InlineStyling