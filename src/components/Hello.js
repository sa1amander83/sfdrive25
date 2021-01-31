import React, {Component} from "react";
import "./hello.css"

class Hello extends Component {

    constructor(props) {
        super(props);
        this.props = props;}

    render () {
        return (<div><h1>Hello World</h1></div>);
    }

}
export default Hello;