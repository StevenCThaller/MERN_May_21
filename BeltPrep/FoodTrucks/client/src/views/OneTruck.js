import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { truckReducer } from '../reducers/truckReducer';

const initialTruck = {
    name: '',
    style: '',
    description: '',
    reviews: []
}

const initialReview = {
    name: '',
    rating: 3,
    review: ''
}

const initialErrors = {
    name: '',
    rating: '',
    review: ''
}

const OneTruck = props => {
    const { id } = props;
    const [truck, setTruck] = useReducer(truckReducer, initialTruck);
    const [review, setReview] = useState(initialReview);
    const [errors, setErrors] = useState(initialErrors);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/trucks/${id}`)
            .then(response => setTruck({
                type: 'reset',
                payload: response.data.results
            }))
            .catch(err => navigate('/'))
    }, [id])

    const changeHandler = e => {
        const { name, value } = e.target;

        setReview({
            ...review,
            [name]: value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/trucks/${id}/review`, review)
            .then(response => {
                const { message, results } = response.data;
                if(message === "success"){
                    setTruck(response.data.results);
                    resetForm();
                } else {
                    const newErrors = {...initialErrors};
                    for(const key in results.errors){
                        newErrors[key] = results.errors[key].message;
                    }
                    setErrors(newErrors);
                }
            })
    }   

    const resetForm = () => {
        setReview(initialReview);
        setErrors(initialErrors);
    }

    return (
        <div className="col-sm-12">
            <div className="row">
                <h2>{truck.name}</h2>
                <p>Style: {truck.style}</p>
                <p>Description: {truck.description}</p>
                <p>Average Rating: { 
                    truck.reviews.length === 0 ?
                    0
                    :
                    (truck.reviews.map(rev => rev.rating).reduce((sum, rating) => sum + rating) / truck.reviews.length).toFixed(1) 
                } stars
                </p>
            </div>
            <div className="row">
                {
                    truck.reviews.map((review, i) => 
                        <div key={i} className="col-sm-8 offset-sm-2">
                            <p className="col-sm-4">{review.name}</p>
                            <div className="col-sm-8">
                                <p>Review: {review.review}</p>
                                <p>Rating: {review.rating} stars</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="row">
                <form onSubmit={submitHandler} className="row col-sm-12">
                    <div className="col-sm-7">
                        <div className="form-group row">
                            { 
                                errors.name ?
                                <span className="col-sm-8 text-danger offset-sm-4">{errors.name}</span>
                                :
                                ''
                            }
                            <label htmlFor="name" className="col-sm-4">Name: </label>
                            <input type="text" name="name" className="col-sm-8" onChange={changeHandler} value={review.name}/>
                        </div>
                        <div className="form-group row">
                            { 
                                errors.review ?
                                <span className="col-sm-8 text-danger offset-sm-4">{errors.review}</span>
                                :
                                ''
                            }
                            <label htmlFor="review" className="col-sm-4">Review: </label>
                            <textarea name="review" className="col-sm-8" rows="4" onChange={changeHandler} value={review.review}></textarea>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="form-group row">
                            { 
                                errors.rating ?
                                <span className="col-sm-8 text-danger offset-sm-4">{errors.rating}</span>
                                :
                                ''
                            }
                            <label htmlFor="rating" className="col-sm-4">Rating: </label>
                            <select name="rating" className="col-sm-8" value={review.rating} onChange={changeHandler}>
                                <option value="1">1 stars</option>
                                <option value="2">2 stars</option>
                                <option value="3">3 stars</option>
                                <option value="4">4 stars</option>
                                <option value="5">5 stars</option>
                            </select>
                        </div>
                        <div className="form-group row col-sm-8 offset-sm-4">
                            <input type="button" className=" col-sm-6 btn btn-secondary" value="Cancel" onClick={ resetForm } />
                            <input type="submit" className=" col-sm-6 btn btn-primary" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OneTruck
