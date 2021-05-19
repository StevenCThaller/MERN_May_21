import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = props => {
    const { id } = props;
    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/trucks/${id}/delete`)
            .then(response => navigate('/'))
            .catch(err => navigate('/'));
    }
    return (
        <input type="button" value="Delete" className="col-sm-2" onClick={deleteHandler} />
    )
}

export default DeleteButton
