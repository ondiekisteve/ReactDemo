import React,{Component} from "react";
import axios from "axios";

class ListComponent extends Component{
    constructor(){
        super();
        this.state = {
            posts : [],
            errormsg : ""
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response =>{
                this.setState({
                    posts: response.data
                })
            })
            .catch(error =>{
                this.setState({
                    errormsg : "Error retrieving data"
                })
            })
    }

    render() {
        const {posts,errormsg} = this.state;
        return(
            <div>
                <h2>All posts</h2>
                {
                    posts.length ?
                        posts.map(post =>
                            <div key={post.id}>{post.title}</div>
                        ):
                        null
                }
                {errormsg ? <div>{errormsg} </div>: null}
            </div>
        )
    }
}

export default ListComponent