import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Page from './Page/Page';
const Home = () => {
    return (
        <Container>
            <Header></Header>
            <Row  className='register'>
                <Col lg={3}>
                </Col>
                <Col lg={9}>
                <Page></Page>

                </Col>
            </Row>

            <Outlet></Outlet>


        </Container>
    );
};

export default Home;