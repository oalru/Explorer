import React from 'react';
import { Link } from 'react-router-dom';

const Errors = (props) => {
    return(
        <div>
        <h1>Page Went to the Grocery</h1>
        <h2>Sorry, Try something else</h2>
        <Link to='/'>Click Here To Return To The Home Page</Link>
        </div>
    );
}

export default Errors;