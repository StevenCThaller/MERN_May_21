import React, { useState } from 'react'

const FormComponent = () => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPW, setConfirmPW] = useState("");

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password:"",
        confirmPW: ""
    });
    const [hidden, setHidden] = useState({
        password: "",
        confirmPW: ""
    })

    const changeHandler = e => {
        // let {...userCopy} = user;
        // userCopy[e.target.name] = e.target.value;
        // setUser(userCopy);

        setUser({ ...user, [e.target.name]: e.target.value });

        if(e.target.name === "password" || e.target.name === "confirmPW"){
            setHidden({ ...hidden, [e.target.name]: e.target.value.split('').map(() => '*').join('') });
        }
    }

    const { firstName, lastName, email } = user;
    const { password, confirmPW } = hidden;

    return (
        <>
        <form>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={ changeHandler } />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange={ changeHandler } />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={ changeHandler } />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={ changeHandler } />
            </div>
            <div>
                <label htmlFor="confirmPW">Confirm Password: </label>
                <input type="password" name="confirmPW" onChange={ changeHandler } />
            </div>
        </form>
        <h3>Your Form Data</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPW}</p>
        </>
    )
}

export default FormComponent
