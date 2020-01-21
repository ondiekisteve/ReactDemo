import React,{Component} from "react";
class Count extends Component{
    constructor()
    {
        super()
        this.state = {
            count : 0
        }
    }
    add()
    {
        this.setState((previous,props) => ({
            count: previous.count+1
        }))
    }
    addFiveTimes()
    {
        this.add();
        this.add();
        this.add();
        this.add();
        this.add();
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.addFiveTimes()}>Increment</button>
            </div>
        )
    }
}

export default Count