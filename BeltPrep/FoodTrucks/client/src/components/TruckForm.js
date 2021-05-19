import React from 'react'
import { navigate } from '@reach/router';


const TruckForm = props => {
    const { submitHandler, truck, changeHandler, action, DeleteButton, errors } = props;
    return (
        <form className="col-sm-12" onSubmit={submitHandler}>
            <div className="form-group row">
                { 
                    errors.name ?
                    <span className="col-sm-8 text-danger offset-sm-4">{errors.name}</span>
                    :
                    ''
                }
                <label htmlFor="name" className="col-sm-4">Name: </label>
                <input type="text" name="name" className="col-sm-8" onChange={changeHandler} value={truck.name}/>
            </div>
            <div className="form-group row">
                { 
                    errors.style ?
                    <span className="col-sm-8 text-danger offset-sm-4">{errors.style}</span>
                    :
                    ''
                }
                <label htmlFor="style" className="col-sm-4">Style: </label>
                <input type="text" name="style" className="col-sm-8" onChange={changeHandler} value={truck.style}/>
            </div>
            <div className="form-group row">
                { 
                    errors.description ?
                    <span className="col-sm-8 text-danger offset-sm-4">{errors.description}</span>
                    :
                    ''
                }
                <label htmlFor="description" className="col-sm-4">Description: </label>
                <textarea name="description" rows="4" className="col-sm-8" onChange={changeHandler} value={truck.description}></textarea>
            </div>
            <div className="form-group row flex-right">
                {
                    DeleteButton ?
                    DeleteButton
                    : 
                    ''
                }
                <input type="button" className="col-sm-2" value="Cancel" onClick={ () => navigate('/') } />
                <input type="submit" className="col-sm-2" value={action} />
            </div>
        </form>
    )
}

export default TruckForm
