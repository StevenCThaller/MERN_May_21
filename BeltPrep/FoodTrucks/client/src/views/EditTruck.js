import React, { useEffect, useState, useReducer } from 'react';
import TruckForm from '../components/TruckForm'
import { navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';
import { truckReducer } from '../reducers/truckReducer';

const initialTruck = {
    name: '',
    style: '',
    description: ''
}

const initialErrors = {
    name: '',
    style: '',
    description: ''
}


const EditTruck = props => {
    const { id } = props;
    const [truck, setTruck] = useReducer(truckReducer, initialTruck);
    const [errors, setErrors] = useState(initialErrors);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/trucks/${id}`)
            .then(response => setTruck({
                type: 'reset',
                payload: response.data.results
            }))
            .catch(err => navigate('/'));
    }, []);

    const changeHandler = e => {
        const { name, value } = e.target;
        setTruck({
            type: name,
            payload: value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/trucks/${id}/update`, truck)
            .then(response => {
                const { message, results } = response.data;
                if(message === "success"){
                    navigate(`/truck/${results._id}`)
                } else {
                    const newErrors = {...initialErrors};
                    for(const key in results.errors){
                        newErrors[key] = results.errors[key].message;
                    }
                    setErrors(newErrors);
                }
            })
    }
    return (
        <div className="col-sm-12">
            <h2>New Food Truck</h2>
            <TruckForm
                truck={truck}
                errors={errors}
                submitHandler={ submitHandler }
                changeHandler={ changeHandler }
                action="Update"
                DeleteButton={<DeleteButton id={id}/>}
            />
        </div>
    )
}

export default EditTruck
