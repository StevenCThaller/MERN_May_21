import React from 'react'

const SomeComponent = props => {
    const { name, i } = props;
    return (
        <p>{i} {name}</p>
    )
}

export default SomeComponent
