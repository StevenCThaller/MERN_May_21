import React, { useState, useReducer } from 'react'
import TruckForm from '../components/TruckForm'
import { navigate } from '@reach/router';
import axios from 'axios';
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

const NewTruck = () => {
    const [truck, setTruck] = useReducer(truckReducer, initialTruck);
    const [errors, setErrors] = useState(initialErrors);

    const changeHandler = e => {
        const { name, value } = e.target;
        // setTruck({
        //     ...truck,
        //     [name]: value
        // })
        setTruck({
            type: name,
            payload: value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/trucks', truck)
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
                action="Submit"
            />
        </div>
    )
}

export default NewTruck
