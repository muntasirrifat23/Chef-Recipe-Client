import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Container className='bg-dark text-white'>
                <footer className="footer d-flex">
                    <div>
                        <a >Chef's Table</a>
                        <span>&copy; 2023 Best Food In Town. </span>
                    </div>
                    <div className='m'>
                        <span>Dhaka,Bangladesh</span>
                        <Link to='/'>Home</Link>
                    </div>
                </footer>
            </Container>
        </div>


    );
};

export default Footer;