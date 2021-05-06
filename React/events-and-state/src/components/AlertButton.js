import React, { Component } from 'react'

export default class AlertButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "cody"
        }
    }

    breakItAll = () => {
        console.log("uh oh");
        this.setState({ name: "Steven" });
    }

    render() {
        return (
            <button onClick={ this.breakItAll() }>Click Me!</button>
        )
    }
}
