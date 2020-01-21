import React,{Component} from "react";

import axios from "axios";

class PostComponent extends Component{
    constructor()
    {
        super();
        this.state = {
            userId : '',
            title : '',
            body : ''
    }
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler = (e) =>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
            .then(response =>{
                console.log(response);
            })
            .catch(error =>{
                console.log(error)
            })
    }
    render() {
        const {userId,title,body} = this.state;
        return(
            <form onSubmit={this.submitHandler}>
                UserID : <input type="text" value={userId} onChange={this.changeHandler} name="userId"/>
                Title : <input type="text" value={title} onChange={this.changeHandler} name="title"/>
                Body : <input type="text" value={body} onChange={this.changeHandler} name="body"/>
                <input type="submit"/>
            </form>
        )
    }
}

export default PostComponent