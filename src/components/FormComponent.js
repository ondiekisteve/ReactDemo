import React,{Component} from "react";

class FormComponent extends Component{
    constructor()
    {
        super();
        this.state ={
            username : ""
        }
    }
    changeUsername = (props) =>{
        this.setState({
            username : props.target.value
        })
    }
    render() {
        return(
            <form>
                <div>
                    <label for="username">Username</label>
                    <input type="text" id="username" value={this.state.username} onChange={this.changeUsername}/>
                </div>
            </form>
        )
    }
}

export default FormComponent