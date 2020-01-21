import React,{Component} from "react";
import Column from "./Column";

class Table extends Component{
    render() {

        return(
            <table>
                <tbody>
                <tr>
                    <td>Kevin</td>
                    <td>0700837637</td>
                </tr>
                 <Column/>
                </tbody>
            </table>
        )
    }
}
export default Table