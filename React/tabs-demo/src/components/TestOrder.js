import { useState, useEffect } from 'react'

const TestOrder = () => {
    // 1. Synchronously initialize state
    const [something, setSomething] = useState("nothing");
    console.log("At this point, something in state is: ", something); // 2. This thing

    useEffect(() => {
    console.log("This is the useEffect that has no parameters in its array. and another console log: " + console.log("uh oh"))
    // 8. inner console.log from the line above (the one that says uh oh)
    // 9. the outer console.log the line above
    }, [])

    useEffect(() => {
    console.log("Oh boy! ", something); // 10. this runs even though we haven't actually changed "something" yet ???
    }, [something])

    console.log("This is after the first useEffect"); // 3. This thing

    const someFunction = () => {
    console.log("someFunction is being executed");
    console.log("Something before we use setState: ", something);
    setSomething(something+"!");
    console.log("Something the line after we use setState: ",something);
    }
    console.log("This is after the definition of someFunction and before the definition of someOtherFunction") //4. This thing.

    const someOtherFunction = () => console.log("This is someOtherFunction running"); // 7b. code execution

    console.log("This is after the definition of someOtherFunction, before the render") // 5. This thing


    // 6. this thing
    return ( 
    <div className="App">
        This is the render. Duh.
        <button onClick={ someFunction }>Click this button to run some function!</button> {/* ??? Depends on when it's clicked */}
        <button onClick={ someOtherFunction() /* 7a. this executes */}>Uh Oh</button> 
    </div>
    );
}

export default TestOrder
