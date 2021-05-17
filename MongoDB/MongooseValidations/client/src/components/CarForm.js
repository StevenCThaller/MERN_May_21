import React, { useState } from 'react';
import axios from 'axios';

const initialErrors = {
    year: '',
    make: '',
    model: '',
    doors: ''
}

const CarForm = props => {
    const { addCarToCars, car, setCar } = props;
    const [errors, setErrors] = useState(initialErrors)

    const changeHandler = e => {
        const { name, value, type } = e.target;
        setCar({
            ...car,
            [name]: type === "checkbox" ? 
                        !car[name] 
                        : type === "number" ?
                        parseInt(value)
                        : value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/cars', car)
            .then(response => {
                const res = response.data;
                if(res.message === "success") {
                    // if the message was success, i know it was added to the database.
                    // not because of black magic or how mongoose is pre-built, but because
                    // I decided to send out a response with a message of success
                    addCarToCars(res.data);
                    setErrors(initialErrors);
                } else {
                    let incomingErrors = {};
                    for(const key in res.error.errors) {
                        if(car.hasOwnProperty(key)){
                            incomingErrors[key] = res.error.errors[key].message;
                        } 
                    }
                    setErrors({...initialErrors, ...incomingErrors });
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={ submitHandler }>
            <h2>Add a Car</h2>
            <div>
                { errors.year ? <p>{ errors.year }</p> : '' }
                <label htmlFor="year">Year: </label>
                <input type="number" name="year" onChange={changeHandler} value={car.year}/>
            </div>
            <div>
                { errors.make ? <p>{ errors.make }</p> : '' }
                <label htmlFor="make">Make: </label>
                <input type="text" name="make" onChange={changeHandler} value={car.make}/>
            </div>
            <div>
                { errors.model ? <p>{ errors.model }</p> : '' }
                <label htmlFor="model">Model: </label>
                <input type="text" name="model" onChange={changeHandler} value={car.model}/>
            </div>
            <div>
                { errors.doors ? <p>{ errors.doors }</p> : '' }
                <label htmlFor="doors">Doors: </label>
                <input type="number" name="doors" onChange={changeHandler} value={car.doors}/>
            </div>
            <div>
                <label htmlFor="convertible">Convertible: </label>
                <input type="checkbox" name="convertible" onChange={changeHandler} checked={car.convertible} value={car.convertible}/>
            </div>
            <div>
                <input type="submit" value="Create Car" />
            </div>
        </form>
    )
}

export default CarForm
