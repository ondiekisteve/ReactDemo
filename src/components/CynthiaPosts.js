import React,{Component} from "react";

import axios from "axios";

class CynthiaPosts extends Component{

    constructor()
    {
        super();
        this.state ={
            posts : [],
            errorMsg : ""
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response =>{
                this.setState({
                    posts : response.data
                })
            }).catch(error =>{
            this.setState({
                errorMsg : "An error occured"
            })
        })
    }

    render() {
        const {posts} = this.state;
        return(
            <div>
                <h1>The list of posts</h1>
                {
                    posts.length ?
                        posts.map(post =><div key={post.id}> {post.body}</div>)
                        : null
                }
            </div>
        )
    }

}
export default CynthiaPosts