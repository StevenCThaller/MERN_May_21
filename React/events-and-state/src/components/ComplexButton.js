import React, { Component } from 'react'

export default class ComplexButton extends Component {
    constructor(props){
        super(props);
        const { ooh, aah } = this.props;
        this.state = {
            ooh: ooh,
            aah: aah
        };

    }

    complexClick = () => {
        alert("You clicked the complex button");
        let newOoh = this.state.ooh;
        let newAah = this.state.aah;
        if(this.state.ooh.length == this.state.aah.length){
            newOoh += "o";
            this.setState({ ooh: newOoh });
        } else {
            newAah += "a";
            this.setState({ aah: newAah });
        }
        console.log(newOoh);
        console.log(newAah);
    }

    // shouldComponentUpdate(){
    //     return false;
    // }

    render() {
        const { ooh: propsOoh, aah: propsAah } = this.props;
        const { ooh: stateOoh, aah: stateAah } = this.state;
        return (
            <div>
                <p>Props: {propsOoh}, {propsAah}</p>
                <p>State: {stateOoh}, {stateAah}</p>
                <button onClick={ this.complexClick }>Oooh, so complex!</button>
            </div>
        )
    }
}
