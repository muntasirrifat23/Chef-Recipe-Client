import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Page from '../Page/Page';
import HomeLeft from '../HomeLeft/HomeLeft';
import Caro from '../Caro/Caro';

const Main = () => {
    return (
        <div>
            <div>
                <Caro></Caro>
            </div>


            <div>
            <Row  className='register'>
                
                <Col lg={6}>
                    <HomeLeft></HomeLeft>
                </Col>

                <Col lg={6}>
                <Page></Page>

                </Col>
            </Row>
            </div>
             
        </div>
    );
};

export default Main;