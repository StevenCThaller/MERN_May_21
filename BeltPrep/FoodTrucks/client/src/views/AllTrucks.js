import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const AllTrucks = () => {
    const [trucks, setTrucks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/trucks')
            .then(response => setTrucks(response.data.results))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <div className="col-sm-12 center">
                {
                    trucks.map((truck, i) => 
                        <div key={i} className="row flex-align">
                            <div className="col-sm-8">
                                <h4>{truck.name}</h4>
                                <p>Style: {truck.style}</p>
                                <p>Average Rating: { 
                                    truck.reviews.length === 0 ?
                                    0
                                    :
                                    (truck.reviews.map(rev => rev.rating).reduce((sum, rating) => sum + rating) / truck.reviews.length).toFixed(1) 
                                } stars</p>
                            </div>
                            <div className="col-sm-4">
                                <button className="btn btn-secondary" onClick={() => navigate(`/truck/${truck._id}/edit`)}>Edit</button>
                                <button className="btn btn-primary" onClick={() => navigate(`/truck/${truck._id}`)}>Review</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AllTrucks
