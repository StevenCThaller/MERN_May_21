import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const AllCarData = props => {
    const { cars, setCars } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/cars')
            .then(response => setCars(response.data.data))
            .catch(err => console.log(err));
    }, [])


    return (
        <div>
            <h2>All Car Data</h2>
            {
                cars.map((car, i) => 
                    <div key={i}>
                        <h3><Link to={`/cars/${car._id}`}>{car.year} {car.make} {car.model}</Link></h3>
                        <p>{car.doors} doors and { car.convertible ? 'the wind blowing through your hair' : 'nothing but the sound of the engine bouncing around you.' }</p>
                    </div>    
                )
            }
        </div>
    )
}

export default AllCarData
