import React,{Component} from "react";
import {UserConsumer} from "./UserContext";

class ComponentF extends Component{
    render() {
        return(
            <UserConsumer>
                {
                    (username) =>{
                        return(
                            <h1>My name is {username}</h1>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF