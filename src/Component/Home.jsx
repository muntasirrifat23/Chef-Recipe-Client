import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Header></Header>

            <Outlet></Outlet>


        </Container>
    );
};

export default Home;