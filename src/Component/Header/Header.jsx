import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (

        <Container className='header'>
            <div className='text-danger'>
            <h1 className='danger'>Chef's Table</h1>
            </div>
            <Link to="/">Home</Link>
            <Link to="/chef">Chefs-Recipe</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Registration</Link>
            <Link to="/blog">Blog</Link>
             
        </Container>
    );
};

export default Header;