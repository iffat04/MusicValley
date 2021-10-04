import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark mt-5 p-4 ">
        <div className=" d-flex justify-content-around ">
            <div className="d-flex d-flex flex-column justify-content-start">
            <h2 className="text-warning  w-75 pt-3">Login to Continue Courses and Participate in Contest </h2>
            <Form className="w-75">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
               
            </Form>
            <button  className="btn btn-warning w-25">Submit</button>
            </div>
            <div>
            <div>
                <h2 className="text-warning">Important Links </h2>
                <ul>
                    <li><Link className="footer" to="/about">About Us</Link></li>
                    <li><Link className="footer" to="/Courses">All Courses</Link></li>
                    <li><Link className="footer" to="/contest">Upcoming Contest</Link></li>
                </ul>
            </div>
            <div className= "mt-5">
            <h2 className="text-warning">Contact Us </h2>
            <p className="text-white">Address: 99/3A Segunbagicha, 
            <br/> Dhaka-1000,Bangladesh 
            <br/>
            Phone: +546 33921
            <br/>
            Email: <Link className="footer">musicvalley_09@gmail.com</Link>
            </p>
            </div>

            </div>
            
        </div>
        <p className="text-warning mt-2"> copyright reserved @musicvalley </p>
        </div>
    );
};

export default Footer;