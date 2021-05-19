import React from 'react'
import { Link } from '@reach/router';

const Header = () => {
    return (
        <header className="row">
            <h1 className="col-sm-12">Food Trucks</h1>
            <div>
                <Link to="/">Dashboard</Link>&nbsp;
                <Link to="/truck/new">New Truck</Link>
            </div>
        </header>
    )
}

export default Header
