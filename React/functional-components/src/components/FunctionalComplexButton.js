import React, { useState } from 'react'

const FunctionalComplexButton = props => {
    const { ooh: propsOoh, aah: propsAah } = props;
    // This becomes a LITTLE bit more complicated
    // const [state, setState] = useState({
    //     ooh: ooh,
    //     aah: aah
    // })

    // put your initial state values into the useState function
    // and it spits out an array containing 2 things:
    // a variable that you can use to access that portion of state
    // and a function that you will use to modify that portion of state
    const [ooh, setOoh] = useState(propsOoh);
    // rinse and repeat for each value you wish to store in state
    const [aah, setAah] = useState(propsAah);

    const complexClick = () => {
        alert("You clicked the complex button");
        let newOoh = ooh;
        let newAah = aah;

        if(ooh.length == aah.length) {
            newOoh += "o";
            setOoh(newOoh);
        } else {
            newAah += "a";
            setAah(newAah);
        }
        console.log(newOoh);
        console.log(newAah);
    }

    return (
        <div>
            <p>Props: { propsOoh }, { propsAah }</p>
            {/* <p>State: { state.ooh }, { state.aah }</p> */}
            <p>State: { ooh }, { aah }</p>
            {/* <button onClick={ () => setState({ ooh: state.ooh+"o" }) }>Click Me</button> */}
            <button onClick={ complexClick }>Oooh, so complex!</button>
        </div>
    )
}

export default FunctionalComplexButton
