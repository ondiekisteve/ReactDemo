import React,{Component} from "react";
import ReactDOM from "react-dom";
class PortalDemo extends Component{
    render() {
        return ReactDOM.createPortal(
            <h1>
                This is a dom from a portal
            </h1>,
            document.getElementById('portal-root')
        )
    }
}

export  default PortalDemo