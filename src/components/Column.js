import React,{Component} from "react";

class Column extends Component{
    render() {
        return(
            <React.Fragment>
                <tr>
                    <td>Name</td>
                    <td>Phone</td>
                </tr>
                <tr>
                    <td>Stephen</td>
                    <td>0700837637</td>
                </tr>
                <tr>
                    <td>Alex</td>
                    <td>0700837637</td>
                </tr>
            </React.Fragment>
        )
    }
}

export default Column