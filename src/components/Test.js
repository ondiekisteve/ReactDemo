import React,{Component} from "react";

class Test extends Component{
    constructor()
    {
        super();
        this.state ={
            name : "Clicked the button below to register"
        }

        this.register =this.register.bind(this)
    }

    register ()
    {
        this.setState({
            name: "You have successfully registered"
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.register}>Submit</button>
            </div>
        )
    }
}

export default Test