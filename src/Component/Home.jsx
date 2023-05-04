import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Container } from 'react-bootstrap';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </Container>
    );
};

export default Home;