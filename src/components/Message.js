import React, {Component} from "react";
class Message extends Component{
    constructor()
    {
        super();
        this.state = {
            message : "My first react state application"
        }
    }
    changeMessage()
    {
        this.setState({
            message : "You have successfully registed"
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Submit</button>
            </div>
        )
    }
}

export default Message