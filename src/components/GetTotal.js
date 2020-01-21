import React,{Component} from "react";
import './DisplayResult'
import DisplayResult from "./DisplayResult";
class GetTotal extends Component{
    constructor()
    {
        super();
        this.state ={
            number1 : 10,
            number2 : 20
        }
        this.getSum = this.getSum.bind(this)
    }
    getSum()
    {
        alert(`The sum of ${this.state.number1} + ${this.state.number2} is ${this.state.number1+this.state.number2}`)
    }

    render() {
        return(
            <div>
                <DisplayResult getSum = {this.getSum}/>
            </div>
        )
    }
}

export default GetTotal