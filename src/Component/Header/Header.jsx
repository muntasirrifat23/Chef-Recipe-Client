import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const i1 = '../../../public/download.jpeg'

const Header = () => {
    return (

        <div>
            <div className='header d-flex'>
                <div className='d-flex align-items-center'>
                    
                    <img src={i1} alt=""  className='roundedCircle' />
                
                <h1 className='danger text-danger'>Chef's Table</h1>
                </div>
                
                <div className='text'>
                    <Link to="/">Home</Link>
                    <Link to="/chef">Chefs-Recipe</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Registration</Link>
                    <Link to="/blog">Blog</Link>
                </div>

            </div>


        </div>
    );
};

export default Header;