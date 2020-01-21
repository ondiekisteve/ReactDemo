import React, {Component} from "react";
class Greet extends Component{
    render() {
        const {name,age} =this.props;
        return(
            <div>
                <h1>This is a react {name } {age} application formating</h1>
            </div>
        )
    }
}

export default Greet