import React, { useState } from 'react'

const FormComponent = props => {
    const { submitMessage } = props;
    const [message, setMessage] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        submitMessage(message);
        setMessage("");
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>This is the form component</h2>
            <div>
                <label htmlFor="message">Message: </label>
                <textarea name="message" cols="30" rows="3" onChange={ e => setMessage(e.target.value) } value={message}></textarea>
            </div>
            <input type="submit" value="Submit Message" />
        </form>
    )
}

export default FormComponent
