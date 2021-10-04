import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle={
        color:'goldenrod'
    }
    return (
        <div>
            <h1 className="fst-italic" style={{color: "goldenrod"}}>Music Valley</h1>

            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand>Music valley</Navbar.Brand>
                <Nav className="me-auto">
                <NavLink activeStyle={activeStyle} className=" nav-item fs-5" to="/home">Home</NavLink>
                <NavLink activeStyle={activeStyle} className=" nav-item fs-5" to="/Courses">Courses</NavLink>
                <NavLink activeStyle={activeStyle} className=" nav-item fs-5" to="/about">About Us</NavLink>
                <NavLink activeStyle={activeStyle} className=" nav-item fs-5" to="/contest">Upcoming Contest</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;