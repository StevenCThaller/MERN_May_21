import React, { useState } from 'react'

const SomeForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const submitHandler = e => {
        e.preventDefault();
        setFormSubmitted(true);

        // // Ternary Operator: a fancy less verbose if/else statement
        // // normal if/else statement
        // if(someCondition){
        //     // code to execute if the condition is true
        // } else {
        //     // code to execute if the condition is false
        // }
        // // ternary operator:
        // someCondition ? /* code to execute if the someCondition is true */ : /* code to execute if someCondition is false */

    }

    return (
        <>
            {
                formSubmitted ?
                <h2>Thank you for your submission { firstName } { lastName }</h2>
                :
                <>
                <form onSubmit={ submitHandler }>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" name="firstName" onChange={ e => setFirstName(e.target.value) } />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" name="lastName" onChange={ e => setLastName(e.target.value) } />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" onChange={ e => setEmail(e.target.value) } />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <footer>
                    this is my footer
                </footer>
                </>
            }
        </>
    )
}

export default SomeForm