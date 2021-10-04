import React from 'react';
import { container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="container">
            <img width="600px" height="400px" src="./images/notfound.jpg" alt="" />
            <br/>
            <Link to="/home">
                <button className="btn btn-warning">Back to Home</button>
            </Link>

        </div>
    );
};

export default NotFound;
