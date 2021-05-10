import React from 'react'

const DisplayComponent = props => {
    const { messages } = props;
    return (
        <div>
            <h2>This is the DisplayComponent</h2>
            {
                messages.map( (elem, i) => <p key={i}>{elem}</p>)
            }
        </div>
    )
}

export default DisplayComponent
